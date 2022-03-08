'use strict';

const BookStorage = require('../bookStorage');
const books = require('../datastorage.json');

describe('Testing constructor', () => {
    test('Test 1: missing paramater, throws an error', () => {
        expect(() => new BookStorage()).toThrow('data storage missing');

    })
})

describe('Testing method getById', () => {
    const library = new BookStorage(books);

    describe('Test 1: get books by id from default data', () => {
        const testValues = [
            [1, books[0]],
            [2, books[1]],
            [3, books[2]],
        ];
        test.each(testValues)('number %s returns %p', (id, expectedValue) => {
            expect(library.getById(id)).toEqual(expectedValue);
        });
    });

    test('Test 2: Id not found', () => {
        expect(library.getById(10)).toBeNull()
    });

    test('Test 3: Parameter missing', () => {
        expect(() => library.getById()).toThrowError('parameter missing');
    });

    test('Test 4: Id is wrong type', () => {
        expect(library.getById("313")).toBeNull();
    });
})

describe('Testing method getAllIdsByName', () => {
    const library = new BookStorage(books);
    test('Test 1: Get the id with existing name', () => {
        expect(library.getAllIdsByName("Hacking databases")).toEqual([3]);
    });
    test('Test 2: No match', () => {
        expect(library.getAllIdsByName("How to fall in love with JavaScript")).toEqual([]);
    });
    test('Test 3: Parameter missing', () => {
        expect(library.getAllIdsByName()).toEqual([]);
    });
});

describe('Testing method getAllBookAuthors', () => {
    const library = new BookStorage(books);
    test('Test 1: Get authors from default data', () => {
        expect(library.getAllBookAuthors()).toEqual(["Layla Jones", "Antony Lee", "Emily White"]);
    });

    test('Test 2: No authors found', () => {
        const testData = [
            {
                "id": 1,
                "name": "Hacking databases",
                "author": "",
                "topics": [],
                "price": 30,
                "extras": []
            }
        ];
        const noAuthorLibrary = new BookStorage(testData);
        expect(noAuthorLibrary.getAllBookAuthors()).toEqual([]);
    });

    test('Test 3: Author on list only once', () => {
        const testData = [
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
                "author": "Emil Black"
            }
        ]
        const
            library = new BookStorage(testData);
        expect(library.getAllBookAuthors()).toEqual(["Emily White", "Emil Black"])
    })

})
describe('Testing method getAllBooksByAuthor', () => {
    const library = new BookStorage(books);
    test('Test 1: Get result with author', () => {
        expect(library.getAllBooksByAuthor("Antony Lee")).toEqual([books[1]]);
    })

    test('Test 2: No match with given id', () => {
        expect(library.getAllBooksByAuthor("Leila Hökki")).toEqual
            ([]);
    });
    test('Test 3: Parameter missing', () => {
        expect(() => library.getAllBooksByAuthor()).toThrow("missing parameter");
    });
    test('Test 4:Author has more than one book', () => {

        const testValues = [
            {
                "id": 1,
                "name": "NoSql - New Hope",
                "author": "Layla Jones"
            },
            {
                "id": 2,
                "name": "Databases - The rise and fall",
                "author": "Antony Lee"
            },
            {
                "id": 3,
                "name": "Hacking databases",
                "author": "Antony Lee"
            },
        ];
        const library = new BookStorage(testValues);
        expect(library.getAllBooksByAuthor("Antony Lee")).toEqual([testValues[1], testValues[2]]);
    });
})

describe('Testing method hasTopics', () => {
    const library = new BookStorage(books);

    describe('Test 1: Book has topics', () => {
        const testValues = [
            [1, true],
            [2, true]
        ];
        test.each(testValues)('id %s returns %p', (id, expectedValue) => {
            expect(library.hasTopics(id)).toBe(expectedValue);
        });
    });

    test('Test 2: Book has no topics', () => {
        expect(library.hasTopics(3)).toBe(false);
    });

    test('Test 3: Parameter is missing', () => {
        expect(library.hasTopics()).toBe(false);
    });
})
describe('Testing method getBookTopics', () => {
    const library = new BookStorage(books);

    describe("Test1: Topics from default data", () => {
        const testValues = [
            [1, books[0].topics],
            [2, books[1].topics]
        ];
        test.each(testValues)('id %s returns %p', (id, expectedValue) => {
            expect(library.getBookTopics(id)).toEqual(expectedValue);
        });
    });
    test("Test 2: No topics", () => {
        expect(library.getBookTopics(3)).toEqual([]);

    });
})
describe('Testing method getPriceWithoutExtras', () => {
    const library = new BookStorage(books);
    describe('Test 1: Price from default data', () => {
        const testValues = [
            [1, books[0].price],
            [2, books[1].price],
            [3, books[2].price]
        ]
        test.each(testValues)('id %s returns %p', (id, expectedValue) => {
            expect(library.getPriceWithoutExtras(id)).toBe(expectedValue)
        });
    });
    test('Test 2: No book with given id', () => {
        expect(() => library.getPriceWithoutExtras(222)).toThrow('nothing found with given id')
    });

})
describe('Testing method getTotalPrice', () => {
    const library = new BookStorage(books);

    describe('Test 1: Total price from default data', () => {
        const testValues = [
            [1, 70],
            [2, 190],
            [3, 30]
        ]
        test.each(testValues)('id %s returns %p', (id, expectedValue) => {
            expect(library.getTotalPrice(id)).toBe(expectedValue)
        });
    });
    test('Test 2: No book with given id', () => {
        expect(() => library.getTotalPrice(313)).toThrow('nothing found with given id');
    })

})
describe('Testing method getPriceOfTheExtras', () => {
    const library = new BookStorage(books);

    describe('Test 1: Correct values from default data', () => {
        const testValues = [
            [1, 45],
            [2, 145],
            [3, 0]
        ]
        test.each(testValues)('id %s returns %p', (id, expectedValue) => {
            expect(library.getPriceOfTheExtras(id)).toBe(expectedValue)
        });
    });
    test('Test 2: No book with given id', () => {
        expect(() => library.getPriceOfTheExtras(131)).toThrow('nothing found with given id');
    })

})