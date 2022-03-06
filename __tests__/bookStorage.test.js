'use strict';

const BookStorage = require('../bookStorage');
const books = require('../datastorage.json');

describe('Testing constructor', () => {
    test('Test 1: missing paramater, throws an exception', () => {
        expect(() => new BookStorage()).toThrow('data storage missing');

    })
})

describe('Testing method getById', () => {
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
describe('Testing method getAllIdsByName', () => {
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

describe('Testing method getAllBookAuthors()', () => {
    const library = new BookStorage(books);
    test('Test 1: Get authors from datastorage', () => {
        expect(library.getAaaBookAuthors()).toEqual(["Layla Jones", "Antony Lee", "Emily White"]);
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
        expect(noAuthorLibrary.getAllBookAuthors().toEqual([]));


    })
    test('Test 3: Author on list only once, with custom data', () => {
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
