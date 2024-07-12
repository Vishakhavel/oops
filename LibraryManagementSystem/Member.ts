import { Book } from './Book';
import { Library } from './Library';
export class Member {
  name: string = '';
  memberID: string | number = '';
  borrowedBooks: Book[] = [];

  constructor(
    name: string = '',
    memberID: string | number = 1,
    borrowedBooks: Book[] = []
  ) {
    this.name = name;
    this.memberID = memberID;
    this.borrowedBooks = borrowedBooks;
  }
  returnBook(book: Book, library: Library): void {
    // remove the book from the borrowed books list
    this.borrowedBooks.filter((curBook) => curBook.ISBN !== book.ISBN);
    // add the book to the library
    library.addBook(book);
  }
  borrowBook(book: Book, library: Library): void {
    this.borrowedBooks.push(book);
    library.removeBook(book);
  }
  printBorrowedBooks(): void {
    let borrowedBookNames: string[] = [];
    this.borrowedBooks.map((curBook) => borrowedBookNames.push(curBook.title));

    console.log('Borrowed books by', this.memberID, ' -', borrowedBookNames);
  }
}
