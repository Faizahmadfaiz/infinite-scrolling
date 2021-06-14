import React from 'react'

import { Button as BootstrapButton } from 'react-bootstrap'

import { ButtonProps } from './Button.types'

const Button = (props: ButtonProps): React.ReactElement => {
  const { onClick, children, variant = 'default', ...rest } = props
  return (
    <BootstrapButton onClick={onClick} variant={variant} {...rest}>
      {children}
    </BootstrapButton>
  )
}

export default Button
