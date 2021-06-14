import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'
import IconButton from './IconButton'
import { IconButtonProps } from './IconButton.types'

const actions = {
  onClick: action('onClick'),
}

export default {
  title: 'IconButton',
  component: 'IconButton',
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
        labels: {
          sm: 'Small',
          md: 'Medium',
          lg: 'Large',
        },
      },
    },
    variant: {
      options: ['primary', 'outline-primary'],
      control: { type: 'radio' },
    },
  },
}

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  icon: 'delete',
  variant: 'primary',
  disabled: false,
  spin: false,
}

export const NamedIcons = (): React.ReactElement => (
  <div>
    <div>Navigation icons</div>
    <IconButton icon="close" {...actions} />
    <IconButton icon="back" {...actions} />
    <IconButton icon="forward" {...actions} />
    <IconButton icon="up" {...actions} />
    <IconButton icon="down" {...actions} />
    <IconButton icon="refresh" {...actions} />
    <div>Action icons</div>
    <IconButton icon="add" {...actions} />
    <IconButton icon="edit" {...actions} />
    <IconButton icon="delete" {...actions} />
    <IconButton icon="remove" {...actions} />
    <IconButton icon="save" {...actions} />
    <IconButton icon="check" {...actions} />
    <div>Information icons</div>
    <IconButton icon="menu" {...actions} />
    <div>Signout icon</div>
    <IconButton icon="signout" {...actions} />
  </div>
)
