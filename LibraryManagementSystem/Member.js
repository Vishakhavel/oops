"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
class Member {
    constructor(name = '', memberID = 1, borrowedBooks = []) {
        this.name = '';
        this.memberID = '';
        this.borrowedBooks = [];
        this.name = name;
        this.memberID = memberID;
        this.borrowedBooks = borrowedBooks;
    }
    returnBook(book, library) {
        // remove the book from the borrowed books list
        this.borrowedBooks.filter((curBook) => curBook.ISBN !== book.ISBN);
        // add the book to the library
        library.addBook(book);
    }
    borrowBook(book, library) {
        this.borrowedBooks.push(book);
        library.removeBook(book);
    }
    printBorrowedBooks() {
        let borrowedBookNames = [];
        this.borrowedBooks.map((curBook) => borrowedBookNames.push(curBook.title));
        console.log('Borrowed books by', this.memberID, ' -', borrowedBookNames);
    }
}
exports.Member = Member;
