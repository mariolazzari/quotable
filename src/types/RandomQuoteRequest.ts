// random quote prameters
export type RandomQuoteRequest = Partial<{
  limit: number;
  maxLength: number;
  minLength: number;
  tags: string;
  author: string;
}>;

export default RandomQuoteRequest;
