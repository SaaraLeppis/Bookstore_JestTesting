'use strict';

module.exports = class BookStorage {
    constructor(data) {
        if (!data) throw new Error('data storage missing');
        this.bookStorage = data;
    }

    getById(id) {
        if (!id) throw new Error('Parameter missing');
        for (let book of this.bookStorage) {
            if (book.id === id) {
                return book;
            }
        }
        return null;
    }
    getAllIdsByName(name) {
        const listOfIds = [];
        if (!name) return listOfIds;
        for (let book of this.bookStorage) {
            if (book.name === name) {
                listOfIds.push(book.id)
            }
        } return listOfIds;
    }

    getAllBookAuthors() { //returns array 
        const authors = [];
        for (let book of this.bookStorage) {
            if (!authors.includes(book.author)) {
                authors.push(book.author)
            }
        }
        return authors;
    }
    /*  getAllBooksByAuthor(author) {
 
     } */
    /* hasTopics(id) {

    } */
    /* getBookTopics(id) {

    } */
    /*     getPriceWithoutExtras(id) {
    
        } */
    /*  getTotalPrice(id) {
 
     } */
    /*  getPriceofTheExtras(id) {
 
     } */


}



