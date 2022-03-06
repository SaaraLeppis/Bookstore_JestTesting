# Test cases

## **getAllBooksByAuthor(author)**

Returns an array of book objects of given author. Return type is an array ('[]').
If there is no match an empty array is returned.
If parameter is missing, throws an exception `'Missing parameter'`

## Test 1: Get result with author "Antony Lee"

```js
library.getAllBooksByAuthor("Antony Lee");
```

returns

```js
library[1];
```

## Test 2. If no match

call

```js
library.getAllBooksByAuthor("Leila Hökki");
```

returns []

## Test 3. If parameter missing throws exception

call

```js
library.getAllBooksByAuthor("Leila Hökki");

returns exception
`'Missing parameter'`
```

## Test 4: If author has more than one book

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
