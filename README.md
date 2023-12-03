# Quotable REST API client

This package is a TypeScript based wrapper around the public **Quotable** REST APIs 

- [Quotable REST API client](#quotable-rest-api-client)
  - [Gettting started](#gettting-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Quotable class](#quotable-class)
    - [Constructor](#constructor)
    - [Methods](#methods)
    - [getAuthors](#getauthors)
    - [getQuote](#getquote)
    - [getQuotes](#getquotes)
    - [getRandomQuotes](#getrandomquotes)
    - [getTags](#gettags)
  - [Types](#types)
    - [Author](#author)
    - [AuthorRequest](#authorrequest)
    - [AuthorResponse](#authorresponse)
    - [ListQuoteRequest](#listquoterequest)
    - [ListQuoteResponse](#listquoteresponse)
    - [Order](#order)
    - [Quote](#quote)
    - [RandomQuoteRequest](#randomquoterequest)
    - [RequestParams](#requestparams)
    - [Result](#result)
    - [SortBy](#sortby)
    - [Tag](#tag)
    - [TagRequest](#tagrequest)
  - [Authors](#authors)
  - [Links](#links)


**Prerequisites**

This package requires [NodeJS](https://nodejs.org) (version 18 or later) and a node package manager (Npm, Yarn, Pnpm or Bun). 

To make sure you have them available on your machine, try running the following command.

```sh
$ npm -v && node -v
v10.1.0
v18.18.0
```

---

## Gettting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

___

## Installation

**BEFORE YOU INSTALL**: please read the prerequisites.

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/mariolazzari/quotable
$ cd quotable
```

To install and set up the library, run:

```sh
npm install @mariolazzari/quotable
```

## Usage

**Import package**
```js
import { Quotable } from "@mariolazzari/quotable"
```

**Watch mode**
```sh
npm test
```

**Unit testing**
```sh
npm test
```

**Bulding new version**
```sh
npm build
```

This task will create a distribution version of the project inside your local dist/ folder.

---

## Quotable class

Quotable **class** content handles all the requests and the responses to Quotable REST APIs.

### Constructor

In order to initialize Quotable **client**:

```js
const quotable = new Quotable();
```

### Methods

Quotable client includes the following methods:

### getAuthors

*Description*

This asynchronous **method** handles `GET /api/authors` REST API.

*Prototype*

```ts
async getAuthors(params:AuthorRequest): Promise<Result<AuthorResponse>> 
```

*Sample code*

```ts
const sortBy: SortBy<Author> = 'quoteCount';
const order: Order = 'desc';
const { success, data, error } = await quotable.getAuthors({ 
    sortBy,
    order,
});
```

### getQuote

*Description*

This asynchronous **method** handles `GET /api/quotes/:id` REST API.

*Prototype*

```ts
async getQuote(id:string): Promise<Result<Quote>> 
```

*Sample code*

```ts
const id = '2qpi1ZKL9Ko';
const { data, error, success } = await quotable.getQuote(id);
```

### getQuotes

*Description*

This asynchronous **method** handles `GET /api/quotes` REST API.

*Prototype*

```ts
async getQuotes(params:ListQuoteRequest): Promise<Result<ListQuoteResponse>> 
```

*Sample code*

```ts
const tags = 'love | happiness';
const { data, error, success } = await quotable.getQuotes({ tags });
```

### getRandomQuotes

*Description*

This asynchronous **method** handles `GET /api/quotes/random` REST API.

*Prototype*

```ts
async getQuotes(params:RandomQuoteRequest): Promise<Result<Quote[]>> 
```

*Sample code*

```ts
const tags = 'technology,famous-quotes';
const { success, data, error } = await quotable.getRandomQuotes({ tags });
```

### getTags

*Description*

This asynchronous **method** handles `GET /api/tags` REST API.

*Prototype*

```ts
async getTags(params:TagRequest): Promise<Result<Tag[]>> 
```

*Sample code*

```ts
const sortBy: SortBy<Tag> = 'name';
const { success, data, error } = await quotable.getTags({ sortBy });
```
___

## Types

### Author

```ts
type Author = {
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
```

### AuthorRequest

```ts
type AuthorRequest = Partial<{
  slug: string;
  sortBy: SortBy<Author>;
  order: Order;
  limit: number;
  page: number;
}>;
```

### AuthorResponse

```ts
type AuthorResponse = {
  // The number of results included in this response.
  count: number;
  // The total number of results matching this request.
  totalCount: number;
  // The current page number
  page: number;
  // The total number of pages matching this request
  totalPages: number;
  // The 1-based index of the last result included in this response. This shows the
  // current pagination offset.
  lastItemIndex: number | null;
  // The array of authors
  results: Author[];
};
```

### ListQuoteRequest

```ts
type ListQuoteRequest = RandomQuoteParams &
  Partial<{
    sortBy: Sort<Quote>;
    order: Order;
    page: number;
  }>;
```

### ListQuoteResponse

```ts
type ListQuoteResponse = {
  // The number of quotes returned in this response
  count: number;
  // The total number of quotes matching this query
  totalCount: number;
  // The current page number
  page: number;
  // The total number of pages matching this request
  totalPages: number;
  // The 1-based index of the last result included in the current response.
  lastItemIndex: number;
  // The array of quotes
  results: Quote[];
};
```

### Order

```ts
type Order = 'asc' | 'desc' | 'default';
```

### Quote

```ts
type Quote = {
  _id: string;
  // The quotation text
  content: string;
  // The full name of the author
  author: string;
  // The `slug` of the quote author
  authorSlug: string;
  // The length of quote (number of characters)
  length: number;
  // An array of tag names for this quote
  tags: string[];
};
```

### RandomQuoteRequest

```ts
type RandomQuoteRequest = Partial<{
  limit: number;
  maxLength: number;
  minLength: number;
  tags: string;
  author: string;
}>;
```

### RequestParams

```ts
type RequestParams =
  | ListQuoteRequest
  | RandomQuoteRequest
  | AuthorRequest
  | TagRequest;
```

### Result

```ts
type Result<T> = {
  success: boolean;
  data?: T;
  error?: string;
};
```

### SortBy

```ts
type Sort<T> = keyof T;
```

### Tag

```ts
type Tag = {
  _id: string;
  name: string;
  dateAdded: string;
  dateModified: string;
  __v: number;
  quoteCount: number;
};
```

### TagRequest

```ts
type TagRequest = Partial<{
  sortBy: SortBy<Tag>;
  order: Order;
}>;
```
___

## Authors

* **Mario Lazzari** - *Initial work*

## Links

* Demo [app](https://www.mariolazzari.it/hobbies/bok/quotable)
* My personal [site](https://mariolazzari.it)
* My [github](https://github.com/mariolazzari) profile
* Quotable API [documentation](https://docs.quotable.io/)