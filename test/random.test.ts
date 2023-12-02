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

  it('should return 1 random quote with tags "technology" AND "famous-quotes"', async () => {
    const tags = 'technology,famous-quotes';
    const { success, data, error } = await quotable.getRandomQuotes({
      tags,
    });

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect(data?.length).toBe(1);
    if (data && data.length > 0) {
      expect(
        data[0].tags.some(tag => tags.includes(tag.toLowerCase()))
      ).toBeTruthy();
    }
    expect(error).toBeUndefined();
  });

  it('should return 1 random quote with tags "History" OR "Civil Rights"', async () => {
    const tags = 'history|civil-rights';
    const { success, data, error } = await quotable.getRandomQuotes({
      tags,
    });

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect(data?.length).toBe(1);
    if (data && data.length > 0) {
      expect(
        data[0].tags.some(tag => tags.includes(tag.toLowerCase()))
      ).toBeTruthy();
    }
    expect(error).toBeUndefined();
  });

  it('should return 1 random quote with a maximum length of 50 characters', async () => {
    const maxLength = 50;
    const { success, data, error } = await quotable.getRandomQuotes({
      maxLength,
    });

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect(data?.length).toBe(1);
    if (data && data.length > 0) {
      expect(data[0].length < maxLength).toBeTruthy();
    }
    expect(error).toBeUndefined();
  });

  it('should return 1 random quote with a length between 100 and 140 characters', async () => {
    const minLength = 100;
    const maxLength = 140;
    const { success, data, error } = await quotable.getRandomQuotes({
      minLength,
      maxLength,
    });

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect(data?.length).toBe(1);
    if (data && data.length > 0) {
      expect(
        data[0].length > minLength && data[0].length < maxLength
      ).toBeTruthy();
    }
    expect(error).toBeUndefined();
  });
});
