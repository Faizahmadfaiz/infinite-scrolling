import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const history = useHistory()
  const location = useLocation()
  const auth = useAuth()

  const { from } = (location.state as any) || { from: { pathname: '/' } }
  const handleLogin = () => {
    auth?.signIn(() => {
      history.replace(from)
    })
  }
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default LoginPage
