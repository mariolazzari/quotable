import Order from './Order';
import Quote from './Quote';
import RandomQuoteParams from './RandomQuoteRequest';
import Sort from './SortBy';

export type ListQuoteRequest = RandomQuoteParams &
  Partial<{
    sortBy: Sort<Quote>;
    order: Order;
    page: number;
  }>;

export default ListQuoteRequest;
