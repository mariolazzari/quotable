import AuthorRequest from './AuthorRequst';
import ListQuoteRequest from './ListQuoteRequest';
import RandomQuoteRequest from './RandomQuoteRequest';
import TagRequest from './TagRequest';

export type RequestParams =
  | ListQuoteRequest
  | RandomQuoteRequest
  | AuthorRequest
  | TagRequest;

export default RequestParams;
