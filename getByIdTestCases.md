# Test cases

## **getById(id)**

Method searches the datastorage for an object with given key. Key is unique id number.
If the parameter is found, method returns an book object. If the parameter (id) is not found, method returns 'null' and if parameter is missing, throws an exception `'parameter missing'`

### Test 1: Get books by id from default data

call

```js
library.getById(2);
```

returns

```json
{
  "id": 2,
  "name": "Databases - The rise and fall",
  "author": "Antony Lee",
  "topics": ["data storages", "sql", "noSql"],
  "price": 45,
  "extras": [
    {
      "name": "signed by author",
      "price": 80
    },
    {
      "name": "dvd",
      "price": 65
    }
  ]
}
```

### Test 2: Id not found

call

```js
library.getById(10);
```

returns `null`

### Test 3: Parameter missing

call

```js
library.getById();
```

throws exception `'paramater missing'`

### Test 4: Id is wrong type

call

```js
library.getById("313");
```

returns `null`
