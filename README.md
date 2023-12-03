# Quotable REST API client

This package is a TypeScript based wrapper around the public **Quotable** REST APIs 

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

Rijks **class** content handles all the requests and the responses to the three main Rijks museum REST APIs.

### Constructor

In order to initialize Quotable **client**:

```js
const quotable = new Quotable();
```

### Methods

Quotable client includes the following methods:

### getAuthor

### getAuthors

### getQuote

### getQuotes

### getRandomQuote

### getRandomQuotes

### getTags

## Authors

* **Mario Lazzari** - *Initial work*

## Links

* Demo [app](https://www.mariolazzari.it/hobbies/bok/quotable)
* My personal [site](https://mariolazzari.it)
* My [github](https://github.com/mariolazzari) profile
* Quotable API [documentation](https://docs.quotable.io/)