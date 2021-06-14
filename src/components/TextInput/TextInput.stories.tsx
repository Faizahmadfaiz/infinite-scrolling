import React from 'react'
import { Story } from '@storybook/react'
import TextInput from './TextInput'
import { TextInputProps } from './TextInput.types'

export default {
  title: 'TextInput',
  component: 'TextInput',
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
    type: {
      options: ['text', 'number', 'password'],
      control: {
        type: 'select',
        labels: {
          sm: 'Text',
          md: 'Number',
          lg: 'Password',
        },
      },
    },
  },
}

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Form Name',
  placeholder: 'Placeholder',
  readOnly: false,
}

export const TextArea = Template.bind({})
TextArea.parameters = { controls: { exclude: ['type'] } }
TextArea.args = {
  as: 'textarea',
  label: 'Text Area',
  placeholder: 'Placeholder for textarea...',
  rows: 6,
  readOnly: false,
}

export const WithHelperText = Template.bind({})
WithHelperText.args = {
  label: 'Form Name',
  value: 'ACH/Electronic Withdrawal Stop Payment',
  helperText: 'XX characters remaining',
  readOnly: false,
}

export const FeedbackValid = Template.bind({})
FeedbackValid.args = {
  label: 'Form Name',
  defaultValue: 'ACH/Electronic Withdrawal Stop Payment',
  feedback: 'Looks good',
  isValid: true,
  readOnly: false,
}

export const FeedbackInvalid = Template.bind({})
FeedbackInvalid.args = {
  label: 'Form Name',
  defaultValue: 'A',
  feedback: 'Form Name should be atleast 5 characters long',
  isInvalid: true,
  readOnly: false,
}

export const FeedbackAndHelper = Template.bind({})
FeedbackAndHelper.args = {
  label: 'Form Name',
  defaultValue: 'A',
  helperText: 'XX characters remaining',
  feedback: 'Form Name should be atleast 5 characters long',
  isInvalid: true,
  readOnly: false,
}
