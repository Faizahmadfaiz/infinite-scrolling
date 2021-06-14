import { ButtonProps as ReactButtonProps } from 'react-bootstrap/Button'

export interface ButtonProps extends ReactButtonProps {
  onClick?: () => void
  children?: React.ReactNode | string
}
