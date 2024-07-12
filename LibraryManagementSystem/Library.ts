import { Book } from './Book';
import { Librarian } from './Librarian';
import { Member } from './Member';

export class Library {
  books: Book[] = [];
  members: Member[];
  staff: Librarian[];

  constructor(
    books: Book[] = [],
    staff: Librarian[] = [],
    members: Member[] = []
  ) {
    this.books = books;
    this.staff = staff;
    this.members = members;
  }

  addBook(book: Book, copies: number = 1): void {
    // increase number of copies, if a book already exisits in the inventory.
    let bookExists = this.books.some((curBook) => curBook.ISBN === book.ISBN);
    if (bookExists) {
      this.books = this.books.map((curBook) =>
        curBook.ISBN === book.ISBN
          ? { ...curBook, copies: curBook.copies + 1 }
          : curBook
      );
    } else {
      this.books.push(book);
    }
  }

  removeBook(book: Book): void {
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
        } else {
          newBookArray.push({ ...curBook, copies: curBook.copies - 1 });
        }
      } else {
        // some other book
        newBookArray.push(curBook);
      }
    }

    this.books = newBookArray;
  }

  addStaff(newStaff: Librarian): void {
    this.staff.forEach((curStaff) => {
      if (curStaff.employeeID === newStaff.employeeID) {
        throw new Error('staff with employee ID already exists');
      }
    });

    // staff employee if is unique
    this.staff.push(newStaff);
  }

  removeStaff(staffToBeRemoved: Librarian): void {
    this.staff = this.staff.filter(
      (curStaff) => curStaff.employeeID !== staffToBeRemoved.employeeID
    );
  }

  //   members
  addMembers(newMember: Member): void {
    this.members.forEach((curMember) => {
      if (curMember.memberID === newMember.memberID) {
        throw new Error('member with this ID already exists!');
      }
    });

    // staff employee if is unique
    this.members.push(newMember);
  }

  removeMember(memberToBeRemoved: Member): void {
    this.members = this.members.filter(
      (curMember) => curMember.memberID !== memberToBeRemoved.memberID
    );
  }

  printInventory(): void {
    let inventory: Object[] = [];
    this.books.map((curBook) =>
      inventory.push({ title: curBook.title, copies: curBook.copies })
    );
    console.log('Inventory -', inventory);
  }
}
