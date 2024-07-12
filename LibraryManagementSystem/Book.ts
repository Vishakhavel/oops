export class Book {
  title: string = '';
  author: string = '';
  ISBN: string | number = '';
  copies: number = 1;

  constructor(title = '', author = '', ISBN = '', copies = 1) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.copies = copies;
  }
}
