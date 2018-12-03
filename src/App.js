import React, { Component } from 'react'
import UserList from './components/UserList'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// apollo client setup
const clientUser = new ApolloClient({
  uri: 'http://localhost:3001/graphql/user'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={clientUser}>
        <div style={{ backgroundColor: '#006400', height: window.innerHeight }}>
          <UserList/>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
