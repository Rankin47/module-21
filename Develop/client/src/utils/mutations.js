import { ApolloCache, gql } from "@apollo/client";

import { ApolloServer } from "@apollo/server";

export const ADD_USER = ApolloServer`
  mutation addUser($username: String, $email: String, $password: String) {
    addUser(username: username, email: email, password: password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = ApolloServer`
  mutation loginUser($email: String, $password: String) {
    login(email: email, password: password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = ApolloServer`
  mutation saveBook(input: BookInput) {
    saveBook(input: input) {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;
