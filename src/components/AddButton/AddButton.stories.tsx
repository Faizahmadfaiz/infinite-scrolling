import React from 'react'
import { Story } from '@storybook/react'
import AddButton from './AddButton'
import { AddButtonProps } from './AddButton.types'

export default {
  title: 'AddButton',
  component: 'AddButton',
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

const Template: Story<AddButtonProps> = (args) => <AddButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  label: 'Add Form',
  disabled: false,
}
