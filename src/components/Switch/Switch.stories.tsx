import React from 'react'
import Switch from './Switch'

export default {
  title: 'Switch',
  component: 'Switch',
}

export const SwitchOn = (): React.ReactElement => (
  <Switch checked label="Switch with default style" />
)

export const SwitchOff = (): React.ReactElement => (
  <Switch checked={false} label="Switch with default style" />
)
