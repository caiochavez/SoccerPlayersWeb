import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Button from './common/Button'
import CreateUser from './UserCreate'
import { getUsersQuery } from '../queries/UserQueries'
import { addUserMutation } from '../mutations/UserMutations'

class UserList extends Component {

  state = { visibleCreateUser: false }

  listUsers () {
    const { getUserQuery } = this.props
    if (getUserQuery.loading || getUserQuery.networkStatus === 8) {
      return <div>Carregando Usuários ...</div>
    }
    else return getUserQuery.users.map(user => <ListGroupItem key={user.id}>{ user.name }</ListGroupItem>)
  }

  async onPressButtonModal (action, values) {
    if (action === 'close') this.setState({ visibleCreateUser: false })
    else {
      const userCreate = await this.props.addUserMutation({
        variables: values,
        refetchQueries: [{ query: getUsersQuery }]
      })
      console.log('userCreate: ', userCreate)
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