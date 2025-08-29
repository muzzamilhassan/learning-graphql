import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./schema.js";
import { posts, users, comments } from "./db.js";


const resolvers = {
    Query: {
        posts: () => posts,
        post: (_, { id }) => posts.find((post) => post.id === id),
        comments: () => comments,
        comment: (_, { id }) => comments.find((comment) => comment.id === id),
        users: () => users,
        user: (_, { id }) => users.find((user) => user.id === id),
    },
    Post:{
        author:(post) => users.find((user) => user.id === post.authorId),
        comments:(post) => comments.filter((comment) => comment.postId === post.id),
    },
    Mutation: {
        deletePost: (_, { id }) => {
            const postIndex = posts.findIndex((post) => post.id === id);
            if (postIndex === -1) {
              throw new Error("Post not found");
            }
          
            const deletedPost = posts[postIndex]; // save before removing
            posts.splice(postIndex, 1);
          
            return deletedPost;  
          },
          updatePost: (_, { id, title, body}) =>{
            const post = posts.find((post) => post.id === id);
            if (!post) {
              throw new Error("Post not found");
            }
          
            post.title = title;
            post.body = body;
          
            return post;
          },
          createPost: (_, { title, body, authorId }) => {
            const user = users.find((u) => u.id === authorId);
            if (!user) throw new Error("Invalid authorId");
          
            const newPost = {
              id: `${posts.length + 1}`,
              title,
              body,
              authorId,
            };
            posts.push(newPost);
            return newPost;
          },

          
    }
}
const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 5000 },
});

console.log(`🚀 Server ready at: ${url}`);