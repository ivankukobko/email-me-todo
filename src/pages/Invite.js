import React from 'react'
import { withRouter } from "react-router-dom"

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Link,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core'

function Invite (props) {
  return(
    <Paper>
      <Box m={3} p={3}>
        <form noValidate autoComplete="off">
          <Grid
            container
            spacing={3}
            direction="column"
          >
            <Grid item xs>
              <FormControl fullWidth component="fieldset">
                <FormLabel value="soft">
                  What is your name?
                </FormLabel>

                <TextField />
              </FormControl>
            </Grid>
            <Grid item xs>
              <FormControl fullWidth component="fieldset">
                <FormLabel value="soft">
                  What is your email? (We’ll use this to update you when the to-do is completed)
                </FormLabel>

                <TextField />
              </FormControl>
            </Grid>
            <Grid item xs>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  console.info("I'm a button.");
                  props.history.push("/create-task")
                }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  )
}

export default withRouter(Invite)
