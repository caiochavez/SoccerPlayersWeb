import { gql } from 'apollo-boost'

export const addUserMutation = gql`
  mutation ( $name: String!, $username: String!, $dateBirth: String!, $password: String! ) {
    createUser ( name: $name, username: $username, dateBirth: $dateBirth, password: $password  ) {
      id
      name
      username
      dateBirth
      password
    }
  }
`
export const signInMutation = gql`
  mutation ( $username: String!, $password: String! ) {
    signIn ( username: $username, password: $password ) {
      user {
        id
        name
        username
        dateBirth
      }
      token
    }
  }
`