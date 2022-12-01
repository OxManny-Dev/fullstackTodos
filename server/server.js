const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer} = require('apollo-server-express');


const {typeDefs, resolvers} = require('./schemas');

const app = express();

// shows db query logs whenever db is doing something
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost:27017/gqlTodos')
  .then(() => {
    console.log('Success');
  })
  .catch(e => console.log(e));

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});


// graphiql
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({extended: true}));


const startServer = async () => {
  await apolloServer.start();
//   this will mount our apollo server onto our express server
//  this will create an endpoint for /graphql on our server
//  it can be overriden
  apolloServer.applyMiddleware({ app });
  app.listen(PORT, () => console.log('Server is running'));
};

startServer()
  .then(() => console.log('we made it'));
