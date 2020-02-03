import React from 'react'
import { withRouter } from "react-router-dom"

import { Button } from '@material-ui/core'

function Home (props) {
  return(
    <header className="App-header">
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.history.push("/invite")}
      >
        Visit Invite Link
      </Button>
    </header>
  )
}

export default withRouter(Home)

