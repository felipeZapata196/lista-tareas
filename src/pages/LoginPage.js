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

  return(
    <div>
      <h3>Login to Continue</h3>
      {!login && <form onSubmit={(e) => { e.preventDefault(); enterUser(); }}>
        <input 
          name='email'
          type="text" 
          placeholder={'Enter email'} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          name='password'
          type="text" 
          placeholder={'Enter password'} 
          value={password} 
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <input type={"submit"} value={"Submit"}/>
      </form>}
      
    </div>
  )
}

export default LoginPage;

// Funcionamiento de Login:
//  1. Recoger email y password de los input -> HECHO
//  2. Sacar el token del usuario -> HECHO
//  3. Si todo funciona bien poner la variable global de login a true -> Esto solo se usa en App.js para indicar que página quieres renderizar -> HECHO
//  4. Cambiar de página cuando este logueado