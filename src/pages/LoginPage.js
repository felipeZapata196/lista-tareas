import { TextField, Stack, Card, CardHeader, Button } from '@mui/material';
import { width } from '@mui/system';
import React, {useEffect, useState, useRef} from 'react';
import {doLogin} from '../services/user.service';
import { loginStore } from '../store/loginStore';

const LoginPage = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setLogin = loginStore(state => state.setLogin)
  const login = loginStore(state => state.login);

  const enterUser = async () => {
    await doLogin(email, password).then(async res => {
      console.log("Llega aqui", res)
      await setLogin(true);
    }).catch(err => {
      console.log('Error el loguear al usuario', err);
    })
    console.log("Estado del login ", login)
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

  return (
    // <div>
    //   <h3>Login to Continue</h3>
    //   {login && <form onSubmit={(e) => { e.preventDefault(); enterUser(); }}>
    //     <input 
    //       name='email'
    //       type="text" 
    //       placeholder={'Enter email'} 
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input 
    //       name='password'
    //       type="text" 
    //       placeholder={'Enter password'} 
    //       value={password} 
    //       onChange={(e) => setPassword(e.currentTarget.value)}
    //     />
    //     <input type={"submit"} value={"Submit"}/>
    //   </form>}
      
    // </div>
    <div>
      <h1 style={styleTitle}>ListApp</h1>
      <Card style={formLogin}>
        <CardHeader title="Log in to continue:" color='red' style={styleCardHeader}/>
        <Stack spacing={2}>
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
          <Button style={styleButton}
            onClick={() => enterUser()}
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

export default LoginPage;

// Funcionamiento de Login:
//  1. Recoger email y password de los input -> HECHO
//  2. Sacar el token del usuario -> HECHO
//  3. Si todo funciona bien poner la variable global de login a true -> Esto solo se usa en App.js para indicar que página quieres renderizar -> HECHO
//  4. Cambiar de página cuando este logueado