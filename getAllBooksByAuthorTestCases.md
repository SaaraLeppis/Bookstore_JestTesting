# Test cases

## **getAllBooksByAuthor(author)**

Returns an array of book objects of given author. Return type is an array (`[]`).
If there is no match an empty array is returned.
If parameter is missing, throws an exception `'missing parameter'`

## Test 1: Get result with author

```js
library.getAllBooksByAuthor("Antony Lee");
```

returns

```js
library[1];
```

## Test 2: No match with given id

call

```js
library.getAllBooksByAuthor("Leila Hökki");
```

returns `[]`

## Test 3: Parameter missing

call

```js
library.getAllBooksByAuthor();
```

returns exception
`'missing parameter'`

## Test 4: Author has more than one book

From custom data

```js
const testValues = [
  [1, { name: "NoSql - New Hope", author: "Layla Jones" }],
  [2, { name: "Databases - The rise and fall", author: "Antony Lee" }],
  [3, { name: "Hacking databases", author: "Antony Lee" }],
];
```

call

```js
library.getAllBooksByAuthor("Antony Lee");
```

returns

```js
["Databases - The rise and fall", "Hacking databases"];
```
