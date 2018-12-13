import React, { Component } from 'react'
import Login from './components/Login'
import TeamList from './components/Team/TeamList'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/index'

// apollo client setup
const clientUser = new ApolloClient({
  uri: 'https://soccer-players.herokuapp.com/graphql/user'
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
          <Router>
            <div>
              <Route path='/' component={Login} exact />
              <Route path='/teams' component={TeamList} />
            </div>
          </Router>
        </ReduxProvider>
      </ApolloProvider>
    )
  }
}

export default App
