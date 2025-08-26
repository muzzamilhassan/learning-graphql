export const resolvers = {
    Query: {
      posts: () => [
        { id: "1", title: "First Post", body: "This is my first post!" },
        { id: "2", title: "Second Post", body: "This is another post!" },
      ],
      comments: () => [
        { id: "101", text: "Great post!", post: { id: "1", title: "First Post", body: "This is my first post!" } }
      ],
      users: () => [
        { id: "u1", name: "Alice", email: "alice@example.com" },
        { id: "u2", name: "Bob", email: "bob@example.com" },
      ],
    },
  };
  