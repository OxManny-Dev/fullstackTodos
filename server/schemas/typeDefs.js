//  TypeDefs is where we declare our GraphQL schema
// This lets GraphQL know what data can be queried
// and how data is connected from one another

// This also lets GraphQL know
// what "Queries" and "Mutations" we can perform on our GraphQL Server
// it also lets us know what "parameters" our "Queries" and "Mutations" take
// as well as what type of data they return

// In GraphQL there are no "GET", "POST", "PUT", "DELETE"
// Query = GET
// Mutation =  POST, PUT, DELETE

const {gql} = require('apollo-server-express');


const typeDefs = gql`
    #    This lets GQL that we are declaring this object 
    #   and these are the columns that a user can request for
    #   when getting this particular object
    type User {
        _id: ID
        firstName: String
        lastName: String
        fullName: String
        todos: [Todo]
    }

    type Todo {
        _id: ID
        todo: String
        completed: Boolean
        userId: String
        user: User
    }
    
    # This declares our "Resolvers" (routes in Express world)  and 
    # what type of data they require as input as well as what type of data they return
    # always declare the typeDefs first, before creating the actual resolver
    
    type Query {
        fetchUsers: [User]
#        This lets us know, that this query requires an "id" as the input and it must be a string and the "!" means that it is required
        fetchUserById(id: String!): User
        fetchTodos: [Todo]
    }
    
    type Mutation {
        createUser(firstName: String!, lastName: String!): User
        createTodo(userId: String!, todo: String!): Todo
    }

`;


module.exports = typeDefs;