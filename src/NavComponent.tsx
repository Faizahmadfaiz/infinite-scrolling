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
  // const handleSignout = () => {
  //   auth?.signOut(() => {
  //     history.push('/')
  //   })
  // }

  // const handleLogin = () => {
  //   auth?.signIn(() => {
  //     //
  //   })
  // }
  console.log('User: ', auth?.user)
  // return (
  //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //     <Navbar.Brand href="/home">
  //       Infinite scroll + image lazy loading
  //     </Navbar.Brand>
  //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //     <Navbar.Collapse id="responsive-navbar-nav">
  //       <Nav className="mr-auto">
  //         <Nav.Link href="/">Landing Page</Nav.Link>
  //         <Nav.Link href="/public-page">Public Page</Nav.Link>
  //         <Nav.Link href="/private-page">Private Page</Nav.Link>
  //       </Nav>
  //       <Nav>
  //         {auth?.user ? (
  //           <Nav.Link onSelect={handleSignout}>Signout</Nav.Link>
  //         ) : (
  //           <Nav.Link onSelect={handleLogin}>Login</Nav.Link>
  //         )}
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Navbar>
  // )
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
