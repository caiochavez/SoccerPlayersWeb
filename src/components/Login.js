import React, { Component } from 'react'
import {
  TextField, Card, CardContent, CardActions, CardMedia, Button, Typography
} from '@material-ui/core'
import { graphql } from 'react-apollo'
import { signInMutation } from '../mutations/UserMutations'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { signin } from '../actions/index'

class Login extends Component {
  state = { username: '', password: '', errorUsername: false, errorPassword: false }

  changeValue (field, value) {
    this.setState({ [`${field}`]: value })
  }

  errorField (field) {
    const { username, password, errorUsername, errorPassword } = this.state
    switch (field) {
      case 'username':
        return username.length === 0 && errorUsername
      case 'password':
         return password.length === 0 && errorPassword
      default:
        return null
    }
  }

  async submit () {
    try {
      const { username, password } = this.state
      const { signInApollo, signInRedux } = this.props
      const userLogged = await signInApollo({
        variables: { username, password }
       })
      const { user, token } = userLogged.data.signIn
      signInRedux({ user, token })
    } catch (err) {
      console.log('Error:', err)
    }
  }

  render () {
    const { field, card, cardContent, button } = styles
    const { username, password } = this.state
    return (
      <form style={{ backgroundColor: '#006400', height: window.innerHeight }}>
        <Card style={card}>
          <CardMedia
          image='http://pluspng.com/img-png/socar-vector-png-soccer-player-hitting-1-png-512.png'
          style={{ height: 90, width: 90, paddingTop: 30, margin: 'auto' }} />
          <Typography variant='h3' style={{ textAlign: 'center', paddingTop: 10 }}>
            Soccer Players
          </Typography>
          <CardContent style={cardContent}>
            <TextField
            onBlur={() => this.setState({ errorUsername: true })}
            error={this.errorField('username')}
            helperText={this.errorField('username') ? 'Digite o nome do usuário' : null}
            label='Nome de Usuário'
            value={username}
            margin='normal'
            style={field}
            onChange={event => this.changeValue('username', event.target.value)}>
            </TextField>
            <TextField
            onBlur={() => this.setState({ errorPassword: true })}
            error={this.errorField('password')}
            helperText={this.errorField('password') ? 'Digite a senha' : ''}
            label='Senha'
            value={password}
            type='password'
            margin='normal'
            style={field}
            onChange={event => this.changeValue('password', event.target.value)}>
            </TextField>
          </CardContent>
          <CardActions style={{justifyContent: 'center' }}>
            <Button
            style={button}
            size='large'
            variant='contained'
            onClick={() => this.submit()}>
              Entrar
            </Button>
          </CardActions>
        </Card>
      </form>
    )
  }
}

const styles = {
  card: {
    width: '30%',
    margin: 'auto'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  field: {
  },
  button: {
    backgroundColor: '#006400',
    color: '#ffffff'
  }
}

const mapDispatchToProps = {
  signInRedux: signin
}

export default compose(
  connect(null, mapDispatchToProps),
  graphql(signInMutation, { name: 'signInApollo' })
)(Login)