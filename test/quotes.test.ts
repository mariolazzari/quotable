import { describe, it, expect } from 'vitest';
import { quotable } from './global';

describe('List quotes', () => {
  it('should return the first page of quotes, with 20 results per page', async () => {
    const page = 1;
    const { data, error, success } = await quotable.getQuotes({ page });

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect(data?.page).toBe(page);
    expect(data?.count).toBe(20);
    expect(error).toBeUndefined();
  });
});
