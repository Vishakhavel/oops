"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor(books = [], staff = [], members = []) {
        this.books = [];
        this.books = books;
        this.staff = staff;
        this.members = members;
    }
    addBook(book, copies = 1) {
        // increase number of copies, if a book already exisits in the inventory.
        let bookExists = this.books.some((curBook) => curBook.ISBN === book.ISBN);
        if (bookExists) {
            this.books = this.books.map((curBook) => curBook.ISBN === book.ISBN
                ? Object.assign(Object.assign({}, curBook), { copies: curBook.copies + 1 }) : curBook);
        }
        else {
            this.books.push(book);
        }
    }
    removeBook(book) {
        // filter out the book with the ISBN of the given book to be removed
        console.log('inside removeBook in Library');
        let newBookArray = [];
        // if the book exists, remove one copy of the book. if only once opy exists, remove the entry for the entire book.
        // this.books.forEach((curBook) => {
        for (let i = 0; i < this.books.length; i++) {
            let curBook = this.books[i];
            if (curBook.ISBN === book.ISBN) {
                // book found.
                if (curBook.copies === 1) {
                    continue;
                }
                else {
                    newBookArray.push(Object.assign(Object.assign({}, curBook), { copies: curBook.copies - 1 }));
                }
            }
            else {
                // some other book
                newBookArray.push(curBook);
            }
        }
        this.books = newBookArray;
    }
    addStaff(newStaff) {
        this.staff.forEach((curStaff) => {
            if (curStaff.employeeID === newStaff.employeeID) {
                throw new Error('staff with employee ID already exists');
            }
        });
        // staff employee if is unique
        this.staff.push(newStaff);
    }
    removeStaff(staffToBeRemoved) {
        this.staff = this.staff.filter((curStaff) => curStaff.employeeID !== staffToBeRemoved.employeeID);
    }
    //   members
    addMembers(newMember) {
        this.members.forEach((curMember) => {
            if (curMember.memberID === newMember.memberID) {
                throw new Error('member with this ID already exists!');
            }
        });
        // staff employee if is unique
        this.members.push(newMember);
    }
    removeMember(memberToBeRemoved) {
        this.members = this.members.filter((curMember) => curMember.memberID !== memberToBeRemoved.memberID);
    }
    printInventory() {
        let inventory = [];
        this.books.map((curBook) => inventory.push({ title: curBook.title, copies: curBook.copies }));
        console.log('Inventory -', inventory);
    }
}
exports.Library = Library;
