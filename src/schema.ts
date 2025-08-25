export const schema = `#graphql
    type Post {
        id: ID!
        title: String!
        body: String!
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
        posts: [Post]
        comments: [Comments]
        users: [User]
    }
`;