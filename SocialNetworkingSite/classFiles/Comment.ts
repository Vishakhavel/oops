import { v4 as uuidv4 } from "uuid";

import User from "./User";
import Post from "./Post";
export default class Comment {
  commentId: string;
  content: string;
  author: User;
  post: Post;

  constructor(content: string, author: User, post: Post) {
    this.content = content;
    this.author = author;
    this.post = post;
    // auto-generating the comment ID
    this.commentId = uuidv4();
  }

  editComment(content: string) {
    this.content = content;
  }
}
