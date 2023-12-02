import AuthorRequest from './AuthorRequst';
import ListQuoteRequest from './ListQuoteRequest';
import RandomQuoteRequest from './RandomQuoteRequest';

export type RequestParams =
  | ListQuoteRequest
  | RandomQuoteRequest
  | AuthorRequest;

export default RequestParams;
