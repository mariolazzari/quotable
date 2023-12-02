import Quote from './Quote';

export type ListQuoteResponse = {
  // The number of quotes returned in this response
  count: number;
  // The total number of quotes matching this query
  totalCount: number;
  // The current page number
  page: number;
  // The total number of pages matching this request
  totalPages: number;
  // The 1-based index of the last result included in the current response.
  lastItemIndex: number;
  // The array of quotes
  results: Quote[];
};

export default ListQuoteResponse;
