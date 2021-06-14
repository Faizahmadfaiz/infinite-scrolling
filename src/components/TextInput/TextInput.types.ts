// Generated with util/create-component.js
import { FormControlProps } from 'react-bootstrap/FormControl'
import { FormGroupProps } from 'react-bootstrap/FormGroup'

export interface TextInputProps extends FormControlProps, FormGroupProps {
  type:
    | 'text'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'range'
    | 'search'
    | 'tel'
    | 'color'
    | 'time'
    | 'url'
    | 'week'
  label: string
  placeholder?: string
  id?: string
  name?: string
  defaultValue?: string
  rows?: number
  feedback?: string
  required?: boolean
  helperText?: string
}
