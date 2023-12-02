import { describe, it, expect } from 'vitest';
import { quotable } from './global';

describe('List quotes', () => {
  it('should return page 1, with 20 results per page', async () => {
    const page = 1;
    const { data, error, success } = await quotable.getQuotes({ page });

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect(data?.page).toBe(page);
    expect(data?.count).toBe(20);
    expect(data?.lastItemIndex).toBe(20);
    expect(data?.results).toBeDefined();
    expect(error).toBeUndefined();
  });

  it('should return page 2, with 20 results per page', async () => {
    const page = 2;
    const { data, error, success } = await quotable.getQuotes({ page });

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect(data?.page).toBe(page);
    expect(data?.count).toBe(20);
    expect(data?.lastItemIndex).toBe(40);
    expect(data?.results).toBeDefined();
    expect(error).toBeUndefined();
  });

  it('should return all quotes with the tags love OR happiness', async () => {
    const tags = 'love | happiness';
    const { data, error, success } = await quotable.getQuotes({ tags });

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect(data?.page).toBe(1);
    expect(data?.count).toBe(20);
    expect(data?.lastItemIndex).toBe(20);
    expect(data?.results).toBeDefined();
    expect(error).toBeUndefined();
  });

  it('should return all quotes with the tags technology AND famous-quotes', async () => {
    const tags = 'technology,famous-quotes';
    const { data, error, success } = await quotable.getQuotes({ tags });

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect(data?.page).toBe(1);
    expect(data?.count).toBeGreaterThan(0);
    expect(data?.results).toBeDefined();
    expect(error).toBeUndefined();
  });

  it('should return all quotes by author, using the author slug', async () => {
    const author = 'albert-einstein';
    const { data, error, success } = await quotable.getQuotes({ author });

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect(data?.page).toBe(1);
    expect(data?.count).toBeGreaterThan(0);
    expect(data?.results).toBeDefined();
    expect(data?.results.every(q => q.authorSlug === author));
    expect(error).toBeUndefined();
  });

  it('should return quote by id', async () => {
    const id = '2qpi1ZKL9Ko';
    const { data, error, success } = await quotable.getQuote(id);

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect(data?._id).toBe(id);
    expect(error).toBeUndefined();
  });
});
