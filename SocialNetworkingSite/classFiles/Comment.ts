import User from "./User";
import Post from "./Post";
export default class Comment {
  commentID: number;
  content: string;
  author: User;
  post: Post;

  constructor(content: string, author: User, post: Post) {
    this.content = content;
    this.author = author;
    this.post = post;
    // auto-generating the comment ID
    this.commentID = Math.floor(Math.random() * 1000);
  }
}
