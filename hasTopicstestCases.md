# Test cases

## **hasTopics(id)**

Returns true if book with given id has topics, else returns false.
If parameter is missing, returns false.

## Test 1: Book has topics

call

```js
library.hasTopics(2);
```

returns
`true`

## Test 2: Book has no topics

call

```js
library.hasTopics(2);
```

returns
`false`

## Test 3: Parameter is missing

call

```js
library.hasTopics();
```

returns
`false`
