import Author from './Author';

export type AuthorResponse = {
  // The number of results included in this response.
  count: number;
  // The total number of results matching this request.
  totalCount: number;
  // The current page number
  page: number;
  // The total number of pages matching this request
  totalPages: number;
  // The 1-based index of the last result included in this response. This shows the
  // current pagination offset.
  lastItemIndex: number | null;
  // The array of authors
  results: Author[];
};

export default AuthorResponse;
