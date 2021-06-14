import React from 'react'
import { Story } from '@storybook/react'
import Button from './Button'
import { ButtonProps } from './Button.types'

export default {
  title: 'Button',
  component: 'Button',
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

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Button',
  disabled: false,
}
