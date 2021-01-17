import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        password
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: ID!) {
      bookId
      author
      description
      title
      image
       link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBok($bookId: ID!) {
    removeBook($bookId: ID!) {
      bookId
      user {
      }
    }
  }
`;