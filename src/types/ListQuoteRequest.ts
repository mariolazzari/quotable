import Order from './Order';
import RandomQuoteParams from './RandomQuoteParams';
import Sort from './Sort';

export type ListQuoteRequest = RandomQuoteParams &
  Partial<{
    sortBy: Sort;
    order: Order;
    page: number;
  }>;

export default ListQuoteRequest;
