import React, { useState } from 'react'
import ReactSwitch from 'react-switch'
import { SwitchProps } from './Switch.types'
import './Switch.scss'

const Switch = (props: SwitchProps): React.ReactElement => {
  const { checked, onChange, width, height, className, label, ...rest } = props
  const [isChecked, setChecked] = useState(checked)
  const handleChange = (nextChecked: boolean): void => {
    setChecked(nextChecked)
    if (onChange) {
      onChange(nextChecked)
    }
  }

  return (
    <label htmlFor="default-switch">
      <ReactSwitch
        onChange={handleChange}
        checked={isChecked}
        width={width || 42}
        height={height || 20}
        className={`react-switch ${className}`}
        id="default-switch"
        {...rest}
      />
      <span>{label}</span>
    </label>
  )
}

export default Switch
