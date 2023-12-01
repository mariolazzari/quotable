// random quote prameters
export type RandomQuoteParams = Partial<{
  limit: number;
  maxLength: number;
  minLength: number;
  tags: string;
  author: string;
}>;

export default RandomQuoteParams;
