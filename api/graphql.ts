import { ApolloServer } from "apollo-server-micro";
import typeDefs from "../src/graphql/schema";
import resolvers from "../src/graphql/resolvers";
import allowCors from "../src/middlewares/allowCors";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default allowCors(
  apolloServer.createHandler({
    path: "/api/graphql",
    playground: true,
    introspection: true,
  })
);
