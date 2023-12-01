import { describe, it, expect } from 'vitest';
import { quotable } from './global';

describe('Random quotes', () => {
  it('should return 1 random quote', async () => {
    const { success, data, error } = await quotable.getRandomQuotes();

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect(data?.length).toBe(1);
    expect(error).toBeUndefined();
  });

  it('should return 3 random quote', async () => {
    const limit = 3;
    const { success, data, error } = await quotable.getRandomQuotes({ limit });

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect(data?.length).toBe(limit);
    expect(error).toBeUndefined();
  });
});
