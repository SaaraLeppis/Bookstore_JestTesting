# Test cases

## **getAllBookAuthors()**

Returns an array of different book authors. Method does not receive any parameters.

- If no authors are found, returns an empty array
- Author is added to the result array only once

### Test 1: Get authors from default data' `datastorage.json`

call

```js
library.getAllBookAuthors();
```

returns

```js
["Layla Jones", "Antony Lee", "Emily White"];
```

### Test 2. No authors found

Using custom testdata

#### Testdata

```json
[
  {
    "id": 1,
    "name": "Hacking databases",
    "author": "",
    "topics": [],
    "price": 30,
    "extras": []
  }
]
```

call

```js
noAuthorLibrary.getAllBookAuthors(testData);
```

returns `[]`

### Test 3. Author on list only once

Using custom testdata

#### testdata

```json
[
  {
    "id": 1,
    "name": "Hacking databases",
    "author": "Emily White"
  },
  {
    "id": 2,
    "name": "Node and databases",
    "author": "Emily White"
  },
  {
    "id": 3,
    "name": "Hack of the year",
    "author": "Emil black"
  }
]
```

call

```js
library.getAllBookAuthors();
```

returns

```js
["Emily White", "Emil Black"];
```
