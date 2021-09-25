const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { applyMiddleware } = require('graphql-middleware')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const http = require('http');
const mongoose = require('mongoose');
const jwt = require('express-jwt');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const permissions = require('./graphql/permissions');

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }), permissions),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: ({ req }) => {
      const user = req.user || null;
      return { user };
    }
  });
  await server.start();

  // Additional middlewares
  // TODO: get secret from env variables
  app.use(jwt({ secret: 'DUMMY_SECRET', algorithms: ['HS256'], credentialsRequired: false }));

  // Mount Apollo middleware here.
  // TODO: put api path to env variables
  server.applyMiddleware({ app, path: '/api' });
  // TODO: put db url to env variables
  const dbUrl = `mongodb+srv://rawsly:Rawsly235844.@rawsly-blog.vw8i4.mongodb.net/rawsly?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(dbUrl, { useNewUrlParser: true });
    console.log('Connected to database successfully.');
    // TODO: Put port to env variables
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  } catch (err) {
    throw new Error('An error occurred while connecting to database.', err);
  }

  return { server, app };
}

startApolloServer();