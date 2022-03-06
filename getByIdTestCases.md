# Test cases

## **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

- If the parameter is found, method returns an json object in form:

```json
{ "name": "", "author": "" }
```

- If the parameter (id) is not found, method returns 'null'.
- If parameter is missing, throws an exception `'Parameter missing'`

### Test 1: get the book with id "2"

```js
library.getById(2);
```

returns

```json
{ "name": "Databases - The rise and fall", "author": "Antony Lee" }
```

### Test 2: get books by id from default data

```js
const testValues = [
  [1, { name: "NoSql - New Hope", author: "Layla Jones" }],
  [2, { name: "Databases - The rise and fall", author: "Antony Lee" }],
  [3, { name: "Hacking databases", author: "Emily White" }],
];
```

### Test 3. wrong id

call

```js
library.getById(10);
```

returns `null`

### Test 4. parameter missing

call

```js
library.getById();
```

throws error `'Paramater missing'`

### Test 5. wrong type

call

```js
library.getById("313");
```

returns `null`
