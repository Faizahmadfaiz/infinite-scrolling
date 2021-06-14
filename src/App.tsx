import React from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import NavComponent from './NavComponent'
import PrivateRoute from './auth/PrivateRoute'
import AuthProvider from './auth/AuthProvider'
import HomePage from './pages/HomePage'
import PublicPage from './pages/PublicPage'
import LoginPage from './pages/LoginPage'
import './App.scss'

const App = (): React.ReactElement => {
  return (
    <AuthProvider>
      {/** HashRouter needed for github pages */}
      <HashRouter>
        <div>
          <NavComponent />

          <ul>
            <li>
              <Link to="/public-page">Public Page</Link>
            </li>
            <li>
              <Link to="/home">Home Page</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/public-page">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/home">
              <HomePage />
            </PrivateRoute>
          </Switch>
        </div>
      </HashRouter>
    </AuthProvider>
  )
}

export default App
