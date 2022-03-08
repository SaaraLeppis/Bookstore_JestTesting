# Test cases

## **getBookTopics(id)**

Returns an array of book topics of given id. If none found, returns an empty array.

## Test1: Topics from default data

call

```js
library.getBookTopics(1);
```

returns

```js
["noSql", "sql", "future databases"];
```

## Test 2: No topics

call

```js
library.getBookTopics(1);
```

returns `[]`
