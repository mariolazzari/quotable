import Order from './Order';
import SortBy from './SortBy';
import Tag from './Tag';

export type TagRequest = Partial<{
  sortBy: SortBy<Tag>;
  order: Order;
}>;

export default TagRequest;
