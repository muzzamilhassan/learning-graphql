export const schema = `#graphql
    type Post {
        id: ID!
        title: String!
        body: String!
        author: User
        authorId: ID!
        comments: [Comments]
    }
    type Comments {
        id: ID!
        text: String!
        post: Post!
    }
    type User {
        id: ID!
        name: String!
        email: String!
    }
    type Query {
        posts: [Post]!
        post(id: ID!): Post
        comments: [Comments]!
        comment(id: ID!): Comments
        users: [User]!
        user(id: ID!): User
    }
    type Mutation {
        createPost(title: String!, body: String!, authorId: ID!): Post!
        createComment(text: String!, postId: ID!, userId: ID!): Comments!
        createUser(name: String!, email: String!): User!
        deletePost(id: ID!): Post
        updatePost(id: ID!, title: String, body: String): Post
    }
`;