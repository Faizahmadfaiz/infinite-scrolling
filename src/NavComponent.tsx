import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
// import Nav from 'react-bootstrap/Nav'
import useAuth from './auth/useAuth'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavComponentProps {}

const NavComponent: React.FC<NavComponentProps> = () => {
  const history = useHistory()
  const auth = useAuth()
  return auth?.user ? (
    <p>
      Welcome!{' '}
      <Button
        onClick={() => {
          auth?.signOut(() => history.push('/'))
        }}
      >
        Sign out
      </Button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
}

export default NavComponent
