const {Todo, User} = require('../models');


// Think of resolvers as the "controller"
// for our "routes"  which is coming from our typeDefs
const resolvers = {
  Query: {
    fetchUsers: async () => {
      try {
        return await User.find(); // [ {}, {} ]
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
    //  1st one is the "root" object
    // We never use these in "queries" or "mutations"
    // 2nd one is "args"
    // arg is basically req.body but in GQL
    // args ===  { userId: 'some String', todo: 'someString' }
    fetchUserById: async (_root, args) => {
      try {
        return await User.findById(args.id);
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    }
  },
  Mutation: {
    createUser: async (_root, args) => {
      try {
        // args = { firstName: 'ever', lastName: 'greatest' }
        return await User.create(args);
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
    createTodo: async (_root, args) => {
      try {
        // we cannot populate when using .create
        return await Todo.create(args);
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    }
  },
//  Field Resolvers
//  Shit that we make up
  Todo: {
    user: async (root) => {
      try {
        return await User.findById(root.userId);
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  User: {
    fullName: (root) => {
      return `${root.firstName} ${root.lastName}`;
    },
    todos: async (root) => {
      try {
        return await Todo.find({ userId: root._id });
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};

module.exports = resolvers;
