import { describe, it, expect } from 'vitest';
import { quotable } from './global';
import Order from '../src/types/Order';
import SortBy from '../src/types/SortBy';
import Author from '../src/types/Author';

describe('Authors', () => {
  it('should return all authors, sorted alphabetically by name', async () => {
    const sortBy: SortBy<Author> = 'name';
    const { success, data, error } = await quotable.getAuthors({ sortBy });

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
    expect(data?.count).toBe(20);
    expect(data?.page).toBe(1);
    expect(data?.results).toBeDefined();
    expect(data?.results[0].name.localeCompare(data.results[1].name)).toBe(-1);
  });

  it('should return all authors, sorted by number of quotes in descending order', async () => {
    const sortBy: SortBy<Author> = 'quoteCount';
    const order: Order = 'desc';
    const { success, data, error } = await quotable.getAuthors({
      sortBy,
      order,
    });

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
    expect(data?.count).toBe(20);
    expect(data?.page).toBe(1);
    expect(data?.results).toBeDefined();
    expect(data?.results[0].name.localeCompare(data.results[1].name)).toBe(1);

    if (data?.results) {
      const [first, second] = data?.results;
      if (first && second) {
        expect(first.quoteCount > second.quoteCount).toBeTruthy();
      }
    }
  });

  it('should return a single author by slug', async () => {
    const slug = 'albert-einstein';
    const { success, data, error } = await quotable.getAuthors({
      slug,
    });

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
    expect(data?.count).toBe(1);
    expect(data?.page).toBe(1);
    expect(data?.results).toBeDefined();
  });

  it('should return multiple authors by slug. In this case, you provide a pipe-separated list of slugs', async () => {
    const slug = 'slug=albert-einstein|abraham-lincoln';
    const { success, data, error } = await quotable.getAuthors({
      slug,
    });

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
    expect(data?.count).toBe(1);
    expect(data?.page).toBe(1);
    expect(data?.results).toBeDefined();
  });
});
