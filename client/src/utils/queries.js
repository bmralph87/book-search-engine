import gql from 'graphql-tag';

// export const QUERY_BOOK = gql`
//   query book ($bookId: ID!) {
//     book (bookId: $bookId) {
//       bookId
//       authors
//       description
//       title
//       image
//       link
//       }
//     }
//   }
// `;


// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//       bookCount
//       saved Books {
//         book
//       }
//     }
//   }
// `;

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId 
        authors 
        image 
        description 
        title 
        link
      }
    }
  }
`;


