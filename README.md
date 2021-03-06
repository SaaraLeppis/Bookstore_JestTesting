# Unit testing wit JEST

This is Unit Testing-course's end assignment @ `Helsinki Business College` using [JEST](https://jestjs.io/).

## Notes how to use JEST

Using `Test Driven Development`:

- design test cases to separate .md -files
- create tests,
- check that all are failing (to know that they are not going through without aything to test),
- create implementation, check that tests pass - if not good luck to look for mistakes and specially typos...

### Setting up project run following commands

```shell
npm init -y
npm install jest --save-dev
```

- create folder **tests** for tests
- edit script in **package.json**:

```js
 "scripts": {
    "test": "jest"
  },
```

### to run tests

```shell
npm test
```

### to remember structure of code

```js
describe('Testing method getAllBooksByAuthor', () => {
    const library = new BookStorage(books);
test("Test 2: No match with given id", () => {
  expect(library.getAllBooksByAuthor("Leila Hökki")).toEqual([]);
});
test("Test 3: Parameter missing", () => {
  expect(() => library.getAllBooksByAuthor()).toThrow("missing parameter");
});
```

- in case of `.toThrow` use `expect(()...)`

#### If using custom test values and `test.each`

**start with `describe`**

```js
describe("Test 1: Correct values from default data", () => {
  const testValues = [
    [1, 45],
    [2, 145],
    [3, 0],
  ];
  test.each(testValues)("id %s returns %p", (id, expectedValue) => {
    expect(library.getPriceOfTheExtras(id)).toBe(expectedValue);
  });
});
```

## What I learned

To make basic testing functions.

## screenshot of run tests

![all tests passed](./assets/Screenshot_tests.png)
