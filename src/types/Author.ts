export type Author = {
  // A unique id for this author
  _id: string;
  // A brief, one paragraph bio of the author. Source: wiki API
  bio: string;
  // A one-line description of the author. Typically it is the person's primary
  // occupation or what they are know for.
  description: string;
  // The link to the author's wikipedia page or official website
  link: string;
  // The authors full name
  name: string;
  // A slug is a URL-friendly ID derived from the authors name. It can be used as
  slug: string;
  // The number of quotes by this author
  quoteCount: string;
};

export default Author;
