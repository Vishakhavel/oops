import { v4 as uuidv4 } from "uuid";
import Post from "./Post";
export default class User {
  name: string;
  userId: string;
  friends: User[];
  posts: Post[];

  constructor(name: string) {
    this.name = name;
    // this.userId = Math.floor(Math.random() * 1000);
    this.userId = uuidv4();
    this.friends = [];
    this.posts = [];
  }

  public addFriend(user: User): void {
    // check if this user is already friends with the other user.
    let index = this.friends.findIndex(
      (curFriend) => curFriend.userId === user.userId
    );

    if (index === -1) {
      // not found in the user's friends list, so add
      this.friends.push(user);
    } else {
      throw new Error(
        `User - ${this.name} is already friends with ${user.name}!`
      );
    }
    this.printAllFriends();
  }

  //   comments still stay after someone unfriends someone else.
  public removeFriend(user: User): void {
    // check if the user is in the friends list first.
    let index = this.friends.findIndex(
      (curFriend) => curFriend.userId === user.userId
    );

    if (index === -1) {
      // not found in the user's friends list, so throw error.

      throw new Error(`User - ${this.name} is not a friend of ${user.name}!`);
    } else {
      // found in the friend's list, so remove.
      this.friends.splice(index, 1);
    }

    this.printAllFriends();
  }

  public createPost(content: string): void {
    const newPost = new Post(content, this);
    this.posts.push(newPost);
  }

  private printAllFriends(): void {
    let printString = `Friends of ${this.name} - \n`;
    this.friends.map((curFriend) => {
      printString += `${curFriend.name} \n`;
    });

    console.log(printString);
  }
}
