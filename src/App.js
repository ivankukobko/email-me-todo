import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Container from '@material-ui/core/Container'

import Home from './pages/Home'
import Invite from './pages/Invite'
import CreateTask from './pages/CreateTask'
import ThankYou from './pages/ThankYou'

export default function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/invite">
            <Invite />
          </Route>
          <Route exact path="/create-task">
            <CreateTask />
          </Route>
          <Route exact path="/thank-you">
            <ThankYou />
          </Route>
        </Switch>

        <footer style={{marginTop: '20px'}}>
          <Link to="/">Home</Link>
        </footer>
      </Container>
    </Router>
  )
}
