const { gql } = require('apollo-server-express');

const typeDefs = gql`
  interface BaseSchema {
    _id: ID!
    createdAt: String!
    updatedAt: String
    updatedBy: User
  }

  type Post implements BaseSchema {
    _id: ID!
    author: User!
    title: String!
    description: String!
    content: String!
    slug: String!
    tags: [Tag!]
    primaryCategory: Category!
    categories: [Category!]!
    featuredImage: String
    duration: Int
    status: PostStatus!

    createdAt: String!
    updatedAt: String
    updatedBy: User
  }

  type User implements BaseSchema {
    _id: ID!
    username: String!
    email: String!
    password: String!
    profilePhoto: String
    status: PostStatus!
    bookmarkedPosts: [Post!]

    createdAt: String!
    updatedAt: String
    updatedBy: User
  }

  type Category implements BaseSchema {
    _id: ID!
    name: String!

    createdAt: String!
    updatedAt: String
    updatedBy: User
  }

  type Tag implements BaseSchema {
    _id: ID!
    name: String!

    createdAt: String!
    updatedAt: String
    updatedBy: User
  }

  enum PostStatus {
    PUBLISHED
    DRAFT
    READY_TO_PUBLISH
    REJECTED
  }

  enum UserStatus {
    AWAITING_APPROVAL
    APPROVED
    BLOCKED
    REJECTED
    REMOVED
  }

  type Query {
    helloQuery: String

    # UserQueries

    # PostQueries

    # CategoryQueries

    # TagQueries
  }

  type Mutation {
    helloMutation: String

    # UserMutations

    # PostMutations

    # CategoryMutations

    # TagMutations
  }
`;

module.exports = typeDefs;