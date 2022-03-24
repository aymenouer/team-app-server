const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get users array for the homepage"
    usersForHome: [User!]!
  }
  "A User "
  type User {
    "The user's name"
    name: Name!
    "The user's main picture"
    picture: Picture!
    "The user's location"
    location: Location
    "The user's email"
    email: String
    "The user's phone"
    phone: String
  }

  "Name of a User"
  type Name {
    "User's firstname"
    first: String!
    "User's lastname"
    last: String!
  }
  "Picture of a User"
  type Picture {
    "User's image"
    medium: String!
  }
  type Location {
    "User's country"
    country: String!  
  }

`;

module.exports = typeDefs;
