// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Query {
  me: User
  }

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(thoughtText: String!): User
  removeBook(bookId: ID!, reactionBody: String!): User
  }

type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  saved Books: [Book]
}

type Book {
  bookId: ID
  authors: String
  description: String
  title: String
  image: Int
  link: String
}

  type Auth {
    token: ID!
    user: User
  }
`;


// export the typeDefs
module.exports = typeDefs;