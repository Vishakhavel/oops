import { Book } from './Book';
import { Librarian } from './Librarian';
import { Library } from './Library';
import { Member } from './Member';

// create 4 books

let book1: Book = new Book('Harry Potter 1', 'JK Rowling', '1', 3);
let book2: Book = new Book('Harry Potter 2', 'JK Rowling', '2');
let book3: Book = new Book('Harry Potter 3', 'JK Rowling', '3');
let book4: Book = new Book('Harry Potter 4', 'JK Rowling', '4', 3);

let librarian1 = new Librarian('vishak', 1);
let member1 = new Member('vichu', 1, []);

// create new library
let library = new Library();

// add books to library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

// add members to library
library.addMembers(member1);

// add staff to library
library.addStaff(librarian1);

// librarian 1 adds a book into the specific library
library.printInventory();
member1.borrowBook(book1, library);
library.printInventory();
librarian1.addBook(new Book('HP5', 'JK Rowling', '123'), library);
library.printInventory();
librarian1.removeBook(book4, library);
member1.borrowBook(book2, library);
library.printInventory();
