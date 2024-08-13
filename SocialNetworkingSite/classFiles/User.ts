export default class User {
  name: string;
  userId: number;
  friends: User[];

  constructor(name) {
    this.name = name;
    this.userId = Math.floor(Math.random() * 1000);
    this.friends = [];
  }
}
