import React from 'react'

export interface ReactSwitchProps {
  checked: boolean
  onChange?(checked: boolean, event?: any, id?: string): () => void
  disabled?: boolean
  offColor?: string
  onColor?: string
  offHandleColor?: string
  onHandleColor?: string
  handleDiameter?: number
  uncheckedIcon?: React.ReactElement | boolean
  checkedIcon?: React.ReactElement | boolean
  uncheckedHandleIcon?: React.ReactElement
  checkedHandleIcon?: React.ReactElement
  boxShadow?: string
  activeBoxShadow?: string
  height?: number
  width?: number
  className?: string
  borderRadius?: number
}

export interface SwitchProps extends ReactSwitchProps {
  label?: string
}
