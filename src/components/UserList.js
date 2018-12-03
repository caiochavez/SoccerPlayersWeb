import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql, compose } from 'react-apollo'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Button from './common/Button'
import CreateUser from './UserCreate'

const getUsersQuery = gql`
  {
    users {
      name
      username
      id
    }
  }
`

const addUserMutation = gql`
  mutation {
    createUser ( name: "", username: "", dateBirth: "", password: ""  ) {
      id
      name,
      username
      dateBirth
      password
    }
  }
`

class UserList extends Component {

  state = { visibleCreateUser: false }

  listUsers () {
    const { getUserQuery } = this.props
    if (getUserQuery.loading) return <div>Carregando Usuários ...</div>
    else return getUserQuery.users.map(user => <ListGroupItem>{ user.name }</ListGroupItem>)
  }

  onPressButtonModal (action, values) {
    if (action === 'close') this.setState({ visibleCreateUser: false })
    else {
     console.log('Values to Save: ', values)
    }
  }

  render () {
    return (
      <div style={{ width: '50%', margin: 'auto', paddingTop: '10%' }}>
        <ListGroup>
          { this.listUsers() }
        </ListGroup>
        <Button
          onPress={() => this.setState({ visibleCreateUser: true })}
          title='Adicionar Usuário'
          titleColor='#006400'
          size='large'
          block={true}
          style={{ maxWidth: 300, margin: 'auto', }} />
          <CreateUser
            visible={this.state.visibleCreateUser}
            onPressButton={this.onPressButtonModal.bind(this)} />
      </div>
    )
  }

}

export default compose (
  graphql(getUsersQuery, { name: 'getUserQuery' }),
  graphql(addUserMutation, { name: 'addUserMutation' })
)(UserList)