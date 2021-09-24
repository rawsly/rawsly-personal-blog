const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const http = require('http');
const typeDefs = require('./graphql/typeDefs');
const mongoose = require('mongoose');
const { getUserByToken } = require('./graphql/resolvers/queries/UserQueries');

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
  const dbUrl = `mongodb+srv://rawsly:Rawsly235844.@rawsly-blog.vw8i4.mongodb.net/rawsly?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(dbUrl, { useNewUrlParser: true });
    console.log('Connected to database successfully.');
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  } catch (err) {
    throw new Error('An error occurred while connecting to database.', err);
  }

  return { server, app };
}

startApolloServer();