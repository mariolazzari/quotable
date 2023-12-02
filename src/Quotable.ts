// https://github.com/lukePeavey/quotable#get-random-quotes

import ListQuoteRequest from './types/ListQuoteRequest';
import ListQuoteResponse from './types/ListQuoteResponse';
import Params from './types/Params';
import Quote from './types/Quote';
import RandomQuoteParams from './types/RandomQuoteParams';
import Result from './types/Result';

export class Quotable {
  private baseUrl = 'https://api.quotable.io';

  // get url to call (params parser)
  private getUrl<T extends Params>(url: string, params: T): string {
    let qryStr = '';

    // query params with values
    Object.entries(params)
      .filter(v => !!v[1])
      .forEach((v, idx) => {
        const sep = idx > 0 ? '&' : '?';
        qryStr += `${sep}${v[0]}=${v[1]}`;
      });

    // add query string to endpoint
    if (qryStr) {
      return `${url}${qryStr}`;
    }

    return url;
  }

  // fetch data from api
  private async fetchData<T>(url: string) {
    const result: Result<T> = {
      success: false,
    };

    try {
      const res = await fetch(`${this.baseUrl}${url}`);
      if (!res.ok) {
        result.error = res.statusText;
      }

      const data: T = await res.json();
      result.data = data;
      result.success = true;
    } catch (ex) {
      if (ex instanceof Error) {
        result.error = ex.message;
      }
      result.error = 'Internal server error';
    } finally {
      return result;
    }
  }

  // get random quotes
  public async getRandomQuotes(params: RandomQuoteParams = {}) {
    const url = this.getUrl<RandomQuoteParams>('/quotes/random', params);

    return await this.fetchData<Quote[]>(url);
  }

  // list quotes
  public async getQuotes(params: ListQuoteRequest = {}) {
    const url = this.getUrl<ListQuoteRequest>('/quotes', params);

    return await this.fetchData<ListQuoteResponse>(url);
  }

  // get quote by ID
  public async getQuote(id: string) {
    return await this.fetchData<Quote>(`/quotes/${id}`);
  }
}

export default Quotable;
