import React, { Component } from 'react'
import { Modal, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import Button from './common/Button'

class UserCreate extends Component {

  state = { name: '', username: '', dateBirth: '', password: '' }

  changeValue (value, state) {
    this.setState({ [`${state}`]: value })
  }

  renderModal () {
    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Criar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <ControlLabel>Nome Completo</ControlLabel>
              <FormControl
              type='text'
              value={this.state.name}
              placeholder='Digite o nome'
              onChange={e => this.changeValue(e.target.value, 'name')}>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Nome de Usuário</ControlLabel>
              <FormControl
              type='text'
              value={this.state.username}
              placeholder='Digite o nome de usuário'
              onChange={e => this.changeValue(e.target.value, 'username')}>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Data de Nascimento</ControlLabel>
              <FormControl
              type='date'
              value={this.state.dateBirth}
              placeholder='Digite a data de nascimento'
              onChange={e => this.changeValue(e.target.value, 'dateBirth')}>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Senha</ControlLabel>
              <FormControl
              type='password'
              value={this.state.password}
              placeholder='Digite a senha'
              onChange={e => this.changeValue(e.target.value, 'password')}>
              </FormControl>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            title='Fechar'
            onPress={() => this.props.onPressButton('close')} />
          <Button
            color='primary'
            title='Salvar'
            titleColor='white'
            onPress={() => this.props.onPressButton('save', this.state)}/>
        </Modal.Footer>
      </Modal.Dialog>
    )
  }

  render () {
    if (this.props.visible) return this.renderModal()
    else return null
  }

}

export default UserCreate