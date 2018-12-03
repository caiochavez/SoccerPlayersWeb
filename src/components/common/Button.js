import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonComponent = props => {
  const { title, titleColor, color, size, block, style, onPress } = props
  return (
    <Button bsStyle={ color } bsSize={ size } block={ block } style={ style } onClick={onPress}>
      <span style={{ color: titleColor }}>{ title }</span>
    </Button>
  )
}

export default ButtonComponent