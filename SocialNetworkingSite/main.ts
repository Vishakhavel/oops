// high level
import User from "./classFiles/User";
import Comment from "./classFiles/Comment";
import Post from "./classFiles/Post";

function addComment(content: string, author: User, post: Post): void {
  const comment1 = new Comment(
    "hey slash, welcome to insta dude!",
    steve,
    slash.posts[0]
  );

  slash.posts[0].addComment(comment1);
}

const vichu = new User("Vichu");
const slash = new User("Slash");
const steve = new User("steve");
const josh = new User("josh");

[slash, steve, josh].forEach((friend) => {
  vichu.addFriend(friend);
});
// should throw error since slash is already a friend of vichu's
// user.addFriend(user2);

// const post1 = new Post("rubik's cube pics", vichu);
// const post2 = new Post("guitar pics", slash);
// const post3 = new Post("random shit", steve);

vichu.createPost('rubik"s cube pics');
slash.createPost("guitar video");
vichu.removeFriend(steve);

// steve comments on slash's first post

addComment("hey slash, welcome to insta dude!", steve, slash.posts[0]);
