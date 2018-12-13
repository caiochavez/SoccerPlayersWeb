import React from 'react'
import {
  Fab, Icon
} from '@material-ui/core'
import { Add } from '@material-ui/icons'

const ButtonAdd = props => {
  const { fab } = styles
  return (
    <div onClick={() => props.onClick()}>
      <Fab style={fab}>
        <Add style={{ color: 'white' }} />
      </Fab>
    </div>
  )
}

const styles = {
  fab: {
    right: 25,
    bottom: 15,
    position: 'absolute',
    backgroundColor: '#006400'
  }
}

export default ButtonAdd
