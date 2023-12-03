import { describe, it, expect } from 'vitest';
import { quotable } from './global';
import SortBy from '../src/types/SortBy';
import Tag from '../src/types/Tag';

describe('Tags', () => {
  it('should list all tags', async () => {
    const { success, data, error } = await quotable.getTags();

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });

  it('should list all tags orderd by name', async () => {
    const sortBy: SortBy<Tag> = 'name';
    const { success, data, error } = await quotable.getTags({ sortBy });

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
    if (data) {
      const [first, second] = data;
      if (first && second) {
        expect(first.name.localeCompare(second.name)).toBe(-1);
      }
    }
  });
});
