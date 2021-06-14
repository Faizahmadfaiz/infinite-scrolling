import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

import { IconButtonProps } from './IconButton.types'
import Icon from '../FontAwesomeIcons/FontAwesomeIcons'
import './IconButton.scss'

const IconButton = React.forwardRef<typeof Button, IconButtonProps>(
  (
    { icon, variant, size, disabled, spin, onClick, className, title, ...rest },
    forwardedRef
  ) => {
    const buttonVariant = variant || 'light'
    const buttonTitle = title || icon
    const [rippleActive, setRippleActive] = useState(false)
    const handleMouseDown = (): void => {
      setRippleActive(true)
      setTimeout(() => {
        setRippleActive(false)
      }, 240)
    }
    const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
      e.stopPropagation()
      if (onClick) {
        onClick(e)
      }
    }
    return (
      <Button
        onMouseDown={handleMouseDown}
        onClick={handleClick}
        size={size}
        disabled={disabled}
        className={`icon-btn ${rippleActive ? 'rippleActive' : ''} ${
          className || ''
        }`}
        title={buttonTitle}
        ref={forwardedRef}
        variant={buttonVariant}
        {...rest}
      >
        <Icon
          iconName={spin ? 'spinner' : icon}
          spin={spin}
          fixedWidth
          className={disabled ? 'disabled' : ''}
        />
      </Button>
    )
  }
)

export default IconButton
