
import React, { Fragment } from 'react'
import { withRouter } from "react-router-dom"

import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  Paper
} from '@material-ui/core'

function ThankYou (props) {
  return(
    <Paper>
      <Box m={3} p={3}>
      <Typography>
        <h2>
          Your to-do has been sent.
        </h2>
        <p>
          You will automatically receive email updates on the progress of your to-do. You can also check on the progress of your to-do by visiting
          &nbsp;<Link href="/">todo.com/justinklee/1Kupez5o8gaLVKRNYheYu0</Link>.
        </p>
        <p>
          Thanks!
        </p>
      </Typography>
      </Box>
    </Paper>
  )
}

export default ThankYou
