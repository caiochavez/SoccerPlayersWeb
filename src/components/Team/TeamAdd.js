import React, { Component } from 'react'
import {
  Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle
} from '@material-ui/core'

class TeamAdd extends Component {

  onKeyDown (event) {
    if (event.key === 'Escape') this.props.onClose()
  }

  render () {
    return (
      <Dialog open={this.props.open} onKeyDown={this.onKeyDown.bind(this)}>
        <DialogTitle>Criar Time</DialogTitle>
        <DialogContent>
          <TextField
          autoFocus
          label='Nome'
          type='text'
          margin='dense'
          fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.onClose()} color='primary'>Fechar</Button>
          <Button onClick={() => this.props.onSave()} color='primary'>Salvar</Button>
        </DialogActions>
      </Dialog>
    )
  }

}

const styles = {

}

export default TeamAdd