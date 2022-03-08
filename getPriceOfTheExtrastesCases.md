# Test cases

## **getPriceOfTheExtras(id)**

Returns the total price of extras bunled with the book with given id.
If no extras is found returns 0.
If no book with the given number is found throws an exeption `nothing found with given id`

### Test 1: Correct values from default data

if no extras (id:3): `0`is returned

call

```js
libabry.getPriceOfTheExtras(2);
```

returns
(`extras: 30 + 15`)

`45`

### Test 2: No book with given id

call

```js
libabry.getTotalPrice(131);
```

throws exception
`'nothing found with given id'`
