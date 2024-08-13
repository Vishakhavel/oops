import User from "./User";
import Comment from "./Comment";
export default class Post {
  postId: number;
  content: string;
  author: User;
  comments: Comment[];
}
