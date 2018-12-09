import React, { Component } from 'react'
import UserList from './components/UserList'
import Login from './components/Login'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// apollo client setup
const clientUser = new ApolloClient({
  uri: 'https://soccer-players.herokuapp.com/graphql/user'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={clientUser}>
        <Router>
          <Route path='/' component={Login} exact />
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
