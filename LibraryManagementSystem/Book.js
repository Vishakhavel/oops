"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title = '', author = '', ISBN = '', copies = 1) {
        this.title = '';
        this.author = '';
        this.ISBN = '';
        this.copies = 1;
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.copies = copies;
    }
}
exports.Book = Book;
