import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Provider as ReduxProvider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/index'
import Routes from './routes'

// apollo client setup
const clientUser = new ApolloClient({
  uri: 'https://soccer-players.herokuapp.com/graphql',
  headers: {
    authorization: localStorage.getItem('token')
  }
})

class App extends Component {
  render() {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true
    const store = createStore (
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return (
      <ApolloProvider client={clientUser}>
        <ReduxProvider store={store}>
          <Routes />
        </ReduxProvider>
      </ApolloProvider>
    )
  }
}

export default App
