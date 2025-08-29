const users = [
  { id: "u1", name: "Alice", email: "alice@example.com" },
  { id: "u2", name: "Bob", email: "bob@example.com" },
];

const posts = [
  { id: "1", title: "First Post", body: "This is my first post!", authorId: "u1" },
  { id: "2", title: "Second Post", body: "Another post!", authorId: "u2" },
];

const comments = [
  { id: "c1", text: "Great post!", postId: "1", userId: "u2" },
  { id: "c2", text: "Thanks for sharing!", postId: "1", userId: "u1" },
];

export { users, posts, comments };