import { gql } from 'apollo-boost'

export const getUsersQuery = gql`
  { 
    users {
      name
      username
      id
    }
  }
`