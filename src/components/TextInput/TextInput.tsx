import React from 'react'
import Form from 'react-bootstrap/Form'
import { TextInputProps } from './TextInput.types'
import './TextInput.scss'

const TextInput = (props: TextInputProps): React.ReactElement => {
  const {
    controlId,
    type,
    label,
    placeholder,
    helperText,
    isInvalid,
    isValid,
    feedback,
    ...rest
  } = props
  return (
    <Form.Group controlId={controlId} className="df-text-input">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        isInvalid={isInvalid}
        isValid={isValid}
        {...rest}
      />
      {!feedback && helperText && (
        <Form.Text className="df-text-input__helper" muted>
          {helperText}
        </Form.Text>
      )}
      {feedback && (
        <Form.Control.Feedback
          type={isValid ? 'valid' : 'invalid'}
          className="form-control-feedback"
        >
          {feedback}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  )
}

export default TextInput
