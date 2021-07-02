import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';

export const Login = () => {
  const [email, setEmail] = useState('franco')
  const [password, setPassword] = useState('1234')

  let history = useHistory();

  const handleLogin = () => {
    //default user or the one in the credentials
    if((email === 'franco' && password === '1234') || (email === 'admin' && password === 'admin1234')) {
      history.push("/dashboard")
    }
  }

  const classes = useStyles()


  return (
    <div className={classes.container}>
      <h3>
        Welcome to this app!
      </h3>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
      <Typography>
        Login
        </Typography>
      </Button>
      </div>
  )
}