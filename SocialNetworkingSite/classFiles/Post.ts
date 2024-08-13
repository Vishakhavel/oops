import { v4 as uuidv4 } from "uuid";

import User from "./User";
import Comment from "./Comment";
export default class Post {
  author: User;
  content: string;
  postId: string;
  comments: Comment[];

  constructor(content: string, author: User) {
    this.content = content;
    this.author = author;
    // auto generate post ID
    this.postId = uuidv4();
    this.comments = [];
  }

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }
  removeComment(comment: Comment): void {
    this.comments = this.comments.filter(
      (c) => !(c.commentId === comment.commentId)
    );
  }
}
