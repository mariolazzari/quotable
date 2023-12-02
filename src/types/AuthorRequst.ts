import Author from './Author';
import Order from './Order';
import SortBy from './SortBy';

export type AuthorRequest = Partial<{
  slug: string;
  sortBy: SortBy<Author>;
  order: Order;
  limit: number;
  page: number;
}>;

export default AuthorRequest;
