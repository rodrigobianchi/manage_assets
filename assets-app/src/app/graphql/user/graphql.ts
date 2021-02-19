import gql from "graphql-tag";

export const SAVE_USER = gql`
  mutation ($user: UserInput) {
    saveUser(userInput: $user) {
      id
      username
    }
  }
`;