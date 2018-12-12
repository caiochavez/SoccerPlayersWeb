import React, { Component } from 'react'
// import UserList from './components/UserList'
import Login from './components/Login'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/index'

// apollo client setup
const clientUser = new ApolloClient({
  uri: 'https://soccer-players.herokuapp.com/graphql/user'
})

class App extends Component {
  render() {
    const store = createStore (
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return (
      <ApolloProvider client={clientUser}>
        <ReduxProvider store={store}>
          <Router>
            <Route path='/' component={Login} exact />
          </Router>
        </ReduxProvider>
      </ApolloProvider>
    )
  }
}

export default App
