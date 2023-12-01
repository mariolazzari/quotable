// https://github.com/lukePeavey/quotable#get-random-quotes

import Quote from './types/Quote';
import RandomQuoteParams from './types/RandomQuoteParams';
import Result from './types/Result';

export class Quotable {
  private baseUrl = 'https://api.quotable.io';

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
  public async getRandomQuotes({
    limit,
    maxLength,
    minLength,
    author,
  }: RandomQuoteParams = {}) {
    let url = '/quotes/random';
    let qryStr = '';

    if (limit && limit > 0 && limit <= 50) {
      qryStr += `limit=${limit}`;
    }

    if (maxLength) {
      qryStr += `maxLength=${maxLength}`;
    }

    if (minLength) {
      qryStr += `maxLength=${maxLength}`;
    }

    if (author) {
      qryStr += `author=${author}`;
    }

    url += `?${qryStr}`;

    const quotes = await this.fetchData<Quote[]>(url);

    return quotes;
  }
}

export default Quotable;
