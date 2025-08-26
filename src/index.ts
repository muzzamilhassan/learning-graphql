import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./schema.js";
import { resolvers } from "./db.js";

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

// how data it will give me 
// query{
//     posts{
//         title,
//         post
//     }
// }
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);