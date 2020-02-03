import React from 'react'
import { withRouter } from "react-router-dom"

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core'

import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
  DateTimePicker,
} from '@material-ui/pickers'

import MomentUtils from '@date-io/moment'

function CreateTask (props) {
  return(
    <Paper>
      <Box m={3} p={3}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <form noValidate autoComplete="off">
            <Grid
              container
              spacing={3}
              direction="column"
            >
              <Grid item xs>
                <FormControl fullWidth component="fieldset">
                  <FormLabel value="soft">
                    Description
                  </FormLabel>

                  <TextField />
                </FormControl>
              </Grid>
              <Grid item xs>
                <FormControl fullWidth component="fieldset">
                  <FormLabel value="soft">
                    Additional info
                  </FormLabel>

                  <TextField />
                </FormControl>
              </Grid>
              <Grid item xs>
                <FormControl fullWidth component="fieldset">
                  <FormLabel value="soft">
                    Due Date
                  </FormLabel>
                  <DateTimePicker onChange={(e) => console.log(e)}/>
                </FormControl>
              </Grid>
              <Grid item xs>
                <FormControl fullWidth component="fieldset">
                  <RadioGroup defaultValue="definite">
                    <FormControlLabel value="soft" control={<Radio />} label="Soft" />
                    <FormControlLabel value="definite" control={<Radio />} label="Definite" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs>
                <FormControl fullWidth>
                  <FormLabel value="soft">
                    Reminder date
                  </FormLabel>

                  <DateTimePicker onChange={(e) => console.log(e)}/>
                </FormControl>
              </Grid>
              <Grid item xs>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    props.history.push('thank-you')
                  }}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </MuiPickersUtilsProvider>
      </Box>
    </Paper>
  )
}

export default withRouter(CreateTask)
