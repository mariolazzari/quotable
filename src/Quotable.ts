// https://github.com/lukePeavey/quotable#get-random-quotes

import AuthorRequest from './types/AuthorRequst';
import ListQuoteRequest from './types/ListQuoteRequest';
import ListQuoteResponse from './types/ListQuoteResponse';
import RequestParams from './types/RequestParams';
import Quote from './types/Quote';
import RandomQuoteRequest from './types/RandomQuoteRequest';
import Result from './types/Result';
import { AuthorResponse } from './types/AuthorResponse';
import TagRequest from './types/TagRequest';
import Tag from './types/Tag';

export class Quotable {
  private baseUrl = 'https://api.quotable.io';

  // get url to call (params parser)
  private getUrl<T extends RequestParams>(url: string, params: T): string {
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
  public async getRandomQuotes(params: RandomQuoteRequest = {}) {
    const url = this.getUrl<RandomQuoteRequest>('/quotes/random', params);

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

  // list authors
  public async getAuthors(params: AuthorRequest = {}) {
    const url = this.getUrl<AuthorRequest>('/authors', params);

    return await this.fetchData<AuthorResponse>(url);
  }

  // tags
  public async getTags(params: TagRequest = {}) {
    const url = this.getUrl<TagRequest>('/tags', params);

    return await this.fetchData<Tag[]>(url);
  }
}

export default Quotable;
