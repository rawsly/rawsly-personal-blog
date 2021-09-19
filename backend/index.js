const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const http = require('http');
const typeDefs = require('./graphql/typeDefs');

const resolvers = {
  Query: {
    helloQuery: () => 'Hello world!',
  },
  Mutation: {
    helloMutation: () => 'Hello mutation',
  }
};

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  // Additional middleware can be mounted at this point to run before Apollo.
  // app.use('*', jwtCheck, requireAuth, checkScope);
  app.get('/', (req, res) => res.send('Hello World'));

  // Mount Apollo middleware here.
  server.applyMiddleware({ app, path: '/api' });
  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

  return { server, app };
}

startApolloServer();