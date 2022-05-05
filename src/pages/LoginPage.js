import React, {useEffect, useState} from 'react';
import {login} from '../services/user.service';
import loginStore from '../store/loginStore';

const LoginPage = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setLogin = loginStore(state => state.setLogin);

  const enterUser = () => {
    login(email, password).then(res => {
      setLogin(true);
      // Falta el navigate o redirect para cambiar de página
    }).catch(err => {
      console.log('Error el loguear al usuario', err);
    })

    console.log("Estado del login", loginStore.login)
  }

  return(
    <div>
      <h3>Login to Continue</h3>
      <form>
        <input placeholder={'Enter email'} onChange={(value) => setEmail(value)}></input>
        <input placeholder={'Enter password'} onChange={(value) => setPassword(value)}></input>
        <button className='btn btn-primary' type="submit" onClick={enterUser}>Log in</button>
      </form>
    </div>
  )
}

export default LoginPage;

// Funcionamiento de Login:
//  1. Recoger email y password de los input
//  2. Sacar el token del usuario
//  3. Si todo funciona bien poner la variable global de login a true -> Esto solo se usa en App.js para indicar que página quieres renderizar
//  4. Cambiar de página cuando este logueado