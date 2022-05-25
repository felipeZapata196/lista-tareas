import { TextField, Stack, Card, CardHeader, Button, FormHelperText } from '@mui/material';
import React, { useState } from 'react';
import {doLogin, getUsers} from '../services/user.service';
import { loginStore } from '../store/loginStore';

const LoginPage = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ correctUser, setCorrectUser ] = useState(true)
  const setLogin = loginStore(state => state.setLogin);
  const login = loginStore(state => state.login);

 
  const enterUser = async () => {
      await doLogin(email, password).then(async res => {
      await setLogin(true);
    }).catch(err => {
      setCorrectUser(false)
    })
  }

  const getUser = () => {
    let users = []
    let total_pages = 2;

    for ( let page = 1; page <= total_pages; page++) {
      getUsers(page).then(async res => {
      
        total_pages = res.data.total_pages
        users = res.data.data;
        let user = await users.filter(person => person.email === email)
        if (user.length !== 0){
     
          await localStorage.setItem('user', JSON.stringify(user[0]));
        }

        enterUser();
      }).catch(err => {
        console.log('Error al sacar usuarios', err);
      })
    }
  }



  return (
    <div>
      <h1 style={styleTitle}>ListApp</h1>
      <Card style={formLogin}>
        <CardHeader title="Log in to continue:" color='red' style={styleCardHeader}/>
        <Stack spacing={2}>
          {correctUser ? 
          <>
            <TextField
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              placeholder="Enter email"
            />
            <TextField
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              placeholder="Enter password"
              type="password"                 
            />
          </> : 
          <>
          <FormHelperText style={{marginLeft: 10, color: "red"}}>Wrong username or password</FormHelperText>
            <TextField
              style={{marginTop: 0}}
              error
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              placeholder="Enter email"
            />
            <TextField
              error
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              placeholder="Enter password"
              type="password"                 
            />
          </> }
          
          <Button style={styleButton}
            onClick={() => getUser()}
            disabled={
              password.length === 0 ||
              email.length === 0
            }
            variant="contained"
            color="primary"
          >
          Login
          </Button>
        </Stack>
      </Card>
    </div>
  )
}

const formLogin = {
  width: "34%",
  alignItems: "center",
  marginLeft: "33%",
  marginTop: "3%",
  paddingTop: "1%",
  padding: "1%",
}

const styleTitle = {
  alignItems: "center",
  marginLeft: "45%",
  marginTop: '10%',
  fontSize: "50px"
}

const styleButton = {
  marginBottom: "5%",
  width: "50%",
  marginLeft: "25%"
}

const styleCardHeader = {
  alignItems: "center",
  marginLeft: "28%",
  color: "gray"
}

export default LoginPage;
