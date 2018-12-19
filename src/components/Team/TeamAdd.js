import React, { Component } from 'react'
import {
  Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle
} from '@material-ui/core'
import ImageUploader from 'react-images-upload'

class TeamAdd extends Component {

  state = {
    name: '',
    errorName: false,
    country: '',
    errorCountry: false,
    picture: undefined,
    fileSizeError: '"O arquivo é muito grande"',
    fileTypeError: '"Esse tipo não é válido"'
  }

  onKeyDown (event) {
    if (event.key === 'Escape') this.props.onClose()
  }

  onDropImage (picture) {
    this.setState({ picture: picture[0] })
    console.log('Picture: ', picture[0])
  }

  onChangeField (field, value) {
    this.setState({ [`${field}`]: value })
  }

  errorField (field) {
    const { name, country, errorName, errorCountry } = this.state
    switch (field) {
      case 'name':
        return name.length === 0 && errorName
      case 'country':
         return country.length === 0 && errorCountry
      default:
        return null
    }
  }

  formIsValid () {
    const { name, country, picture } = this.state
    return (
      name !== '' &&
      country !== '' &&
      picture !== undefined
    )
  }

  render () {
    const { buttonColor } = styles
    return (
      <Dialog open={this.props.open} onKeyDown={this.onKeyDown.bind(this)}>
        <DialogTitle>Criar Time</DialogTitle>
        <DialogContent>
          <TextField
          value={this.state.name}
          onChange={event => this.onChangeField('name', event.target.value)}
          onBlur={() => this.setState({ errorName: true })}
          error={this.errorField('name')}
          helperText={this.errorField('name') ? 'Digite o nome': ''}
          label='Nome'
          type='text'
          margin='dense'
          fullWidth />
          <TextField
          value={this.state.country}
          onChange={event => this.onChangeField('country', event.target.value)}
          onBlur={() => this.setState({ errorCountry: true })}
          error={this.errorField('country')}
          helperText={this.errorField('country') ? 'Digite o país': ''}
          label='País'
          type='text'
          margin='dense'
          fullWidth />
          <ImageUploader
          withIcon={true}
          withPreview={true}
          buttonText='Selecione a imagem'
          onChange={this.onDropImage.bind(this)}
          imgExtension={[ '.jpg', '.jpeg', '.png' ]}
          maxFileSize={5242880}
          fileSizeError={this.state.fileSizeError}
          fileTypeError={this.state.fileTypeError}
          label='tamanho máximo do arquivo: 5mb, aceita: jpg | jpge | png'
          singleImage={true} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.onClose()}>Fechar</Button>
          <Button
          disabled={!this.formIsValid()}
          onClick={() => this.props.onSave()}
          style={this.formIsValid() ? buttonColor : {}}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

}

const styles = {
  buttonColor: {
    color: '#006400'
  }
}

export default TeamAdd