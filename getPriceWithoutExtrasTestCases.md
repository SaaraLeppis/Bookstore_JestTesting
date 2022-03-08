# Test cases

## **getPriceWithoutExtras(id)**

Returns the price of book with given id with out extras. Parameter is id, and if it misses throws an exception '`nothing found with given id`

### Test 1: Price from default data

call

```js
library.getPriceWithoutExtra(3);
```

returns `30`

## Test 2: No book with given id

call

```js
library.getPriceWithoutExtra(222);
```

throws exception
`'nothing found with given id'`
