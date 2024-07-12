"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Librarian = void 0;
class Librarian {
    constructor(name = '', employeeID) {
        this.name = '';
        this.employeeID = '';
        this.name = name;
        this.employeeID = employeeID;
    }
    addBook(book, library) {
        // check if book already exists, if yes increase count of the book
        library.addBook(book);
    }
    removeBook(book, library) {
        library.removeBook(book);
    }
    addMember(member, library) {
        library.addMembers(member);
    }
    removeMember(member, library) {
        library.removeMember(member);
    }
}
exports.Librarian = Librarian;
