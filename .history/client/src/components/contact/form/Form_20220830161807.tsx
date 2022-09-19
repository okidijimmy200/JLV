import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import './Form.scss'

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: 40,
      paddingBottom: 16,
      backgroundColor: '#F4FFED'
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: 16
    },
    textField: {
      marginLeft: 8,
      marginRight: 8,
      width: 300
    },
    submit: {
      marginRight: 15,
      marginBottom: 16,
      backgroundColor: '#225901'
    }
  }))

export default function Form() {
    const classes = useStyles()
  return (
    <>
          <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" className={classes.title}>
            JLV Mixed Farm
          </Typography>
          <form></form>
          
        <CardActions>
          <Button color="primary" variant="contained" className={classes.submit}>Submit</Button>
        </CardActions>
      </Card>
    </>
  )
}
