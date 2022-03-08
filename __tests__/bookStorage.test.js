'use strict';

const BookStorage = require('../bookStorage');
const books = require('../datastorage.json');

describe('1/Testing constructor', () => {
    test('Test 1: missing paramater, throws an error', () => {
        expect(() => new BookStorage()).toThrow('data storage missing');

    })
})

describe('2/Testing method getById', () => {
    const library = new BookStorage(books);

    test('Test 1: get the book with id "2"', () => {
        expect(library.getById(2)).toEqual(books[1])
    })

    describe('Test 2: get books by id from default data', () => {
        const testValues = [
            [1, books[0]],
            [2, books[1]],
            [3, books[2]],
        ];
        test.each(testValues)('number %s returns %p', (id, expectedValue) => {
            expect(library.getById(id)).toEqual(expectedValue);
        });
    });

    test('Test 3: wrong id', () => {
        expect(library.getById(10)).toBeNull()
    });

    test('Test 4: parameter missing', () => {
        expect(() => library.getById()).toThrow('Parameter missing');
    });

    test('Test 5: wrong type', () => {
        expect(library.getById("313")).toBeNull();
    });
})
describe('3/Testing method getAllIdsByName', () => {
    const library = new BookStorage(books);
    test('Test 1: get id with the name "Hacking databases"', () => {
        expect(library.getAllIdsByName("Hacking databases")).toEqual([3]);
    });
    test('Test 2: No match', () => {
        expect(library.getAllIdsByName("How to fall in love with JavaScript")).toEqual([]);
    });
    test('Test 3: Parameter missing', () => {
        expect(library.getAllIdsByName()).toEqual([]);
    });
});

describe('4/Testing method getAllBookAuthors', () => {
    const library = new BookStorage(books);
    test('Test 1: Get authors from datastorage', () => {
        expect(library.getAllBookAuthors()).toEqual(["Layla Jones", "Antony Lee", "Emily White"]);
    })
    // does it mean that there is data without author?  
    test('Test 2: No authors found ', () => {
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


    })
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
describe('5/Testing method getAllBooksByAuthor', () => {
    const library = new BookStorage(books);
    test('Test 1: Get result with author "Antony Lee"', () => {
        expect(library.getAllBooksByAuthor("Antony Lee")).toEqual([books[1]]);
    })

    test('Test 2: If no match', () => {
        expect(library.getAllBooksByAuthor("Leila Hökki")).toEqual
            ([]);
    });
    test('Test 3: If parameter missing', () => {
        expect(() => library.getAllBooksByAuthor()).toThrow("Missing parameter");
    });
    test('Test 4: If author has more than one book', () => {

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

describe('6/Testing method hasTopics', () => {
    const library = new BookStorage(books);

    describe('Test 1: Returns true if has topics', () => {
        const testValues = [
            [1, true],
            [2, true]
        ];
        test.each(testValues)('id %s returns %p', (id, expectedValue) => {
            expect(library.hasTopics(id)).toBe(expectedValue);
        });
    });

    test('Test 2: Returns false if book has no topics', () => {
        expect(library.hasTopics(3)).toBe(false);
    });

    test('Test 3: Returns false if parameter missing', () => {
        expect(library.hasTopics()).toBe(false);
    });
})
describe('7/Testing method getBookTopics', () => {
    const library = new BookStorage(books);

    describe("Test 1: Returns array of test data's topics", () => {
        const testValues = [
            [1, books[0].topics],
            [2, books[1].topics]
        ];
        test.each(testValues)('id %s returns %p', (id, expectedValue) => {
            expect(library.getBookTopics(id)).toEqual(expectedValue);
        });
    });
    test("Test 2: Returns empty array if no topics", () => {
        expect(library.getBookTopics(3)).toEqual([]);

    });
    test("Test 3: Throws and error if parameter is missing", () => {
        expect(() => library.getBookTopics()).toThrow('Parameter missing');
    });
})
describe('8/testing method getPriceWithoutExtras', () => {
    const library = new BookStorage(books);
    test('Test 1.: If parameter missing', () => {
        expect(() => library.getPriceWithoutExtras()).toThrow('Parameter missing');
    });
    describe('Test 2.: Test that returns correct price', () => {
        const testValues = [
            [1, books[0].price],
            [2, books[1].price],
            [3, books[2].price]
        ]
        test.each(testValues)('id %s returns %p', (id, expectedValue) => {
            expect(library.getPriceWithoutExtras(id)).toBe(expectedValue)
        });
    });
    test('Test 3.: If no book with given id', () => {
        expect(() => library.getPriceWithoutExtras(22)).toThrow('nothing found with given id')
    })
    test('Test 4.: If price is missing', () => {
        const testData = [
            {
                "id": 2,
                "name": "Databases - The rise and fall",
                "author": "Antony Lee",
                "topics": [],
                "extras": []
            }
        ]
        const noPriceLibrary = new BookStorage(testData);
        expect(() => noPriceLibrary.getPriceWithoutExtras(2)).toThrow('Price is missing');
    })

})
describe('9/ Testing method getTotalPrice', () => {
    const library = new BookStorage(books);

    describe('Test 1: Correct values from test data', () => {
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
describe('10/ Testing method getPriceOfTheExtras', () => {
    const library = new BookStorage(books);

    describe('Test 1: Correct values from test data', () => {
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