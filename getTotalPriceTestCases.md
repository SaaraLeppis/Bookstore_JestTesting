# Test cases

## **getTotalPrice(id)**

Returns the total price of the book of given id. Price includes the total price of the extras.
If no book with the given number is found throws an exeption `nothing found with given id`

### Test 1: Correct values from test data

call

```js
libabry.getTotalPrice(2);
```

returns
(`price: 25, extras: 30 + 15`)

`70`

### Test 2: No book with given id

call

```js
libabry.getTotalPrice(313);
```

throws  
`'nothing found with given id'`
