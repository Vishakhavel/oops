import { Book } from './Book';
import { Library } from './Library';
import { Member } from './Member';
export class Librarian {
  name: string = '';
  employeeID: string | number = '';

  constructor(name: string = '', employeeID: string | number) {
    this.name = name;
    this.employeeID = employeeID;
  }

  addBook(book: Book, library: Library): void {
    // check if book already exists, if yes increase count of the book
    library.addBook(book);
  }
  removeBook(book: Book, library: Library): void {
    library.removeBook(book);
  }

  addMember(member: Member, library: Library) {
    library.addMembers(member);
  }
  removeMember(member: Member, library: Library) {
    library.removeMember(member);
  }
}
