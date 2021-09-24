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
    comments: [Comment!]

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
    role: Role

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

  type Comment implements BaseSchema {
    _id: ID!
    owner: User!
    content: String!
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

  enum Role {
    AUTHOR
    ADMIN
    MODERATOR
    READER
  }

  type Query {
    helloQuery: String

    # UserQueries

    # PostQueries

    # CategoryQueries

    # TagQueries

    # CommentQueries
  }

  type Mutation {
    helloMutation: String

    # UserMutations

    # PostMutations

    # CategoryMutations

    # TagMutations

    # CommentMutations
  }
`;

module.exports = typeDefs;