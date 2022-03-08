# Test cases

## **getAllIdsByName(value)**

Returns all book **ids** of the books matching the value of name. Return type is an array (`[]`).
If there is no match or parameter is missing, an empty array is returned.

### Test 1: Get the id with existing name

call

```js
library.getAllIdsByName("Hacking databases");
```

returns `[3]`

### Test 2: No match

call

```js
library.getAllIdsByName("How to fall in love with JavaScript");
```

returns `[]`

### Test 3: Parameter missing

call

```js
library.getAllIdsByName();
```

returns `[]`
