import React from 'react'
import Button from '../Button/Button'
import Icon from '../FontAwesomeIcons/FontAwesomeIcons'
import { AddButtonProps } from './AddButton.types'

const AddButton = (props: AddButtonProps): React.ReactElement => {
  const { label, ...rest } = props
  return (
    <Button {...rest}>
      <Icon iconName="plusCircle" /> {label}
    </Button>
  )
}

export default AddButton
