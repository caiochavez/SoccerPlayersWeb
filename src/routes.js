import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { isAuthenticated } from './auth'
import Login from './components/Login'
import TeamList from './components/Team/TeamList'

const PrivateRouter = ({ component: Component, ...args }) => (
  <Route
    {...args}
    render={props => isAuthenticated() 
      ? ( <Component {...props} /> )
      : ( <Redirect to={ { pathname: '/' } } /> ) }
  />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Login} exact />
      <PrivateRouter path='/teams' component={TeamList} exact />
    </Switch>  
  </BrowserRouter>
)

export default Routes