import React from 'react';
import { loginStore } from './store/loginStore';
import { useEffect } from 'react';
import { isLogged } from './services/auth.service';
import { HomeNavigation, AuthNavigation } from './navigation/Navigation'

function App() {

  const setLogin = loginStore(state => state.setLogin)
  const login = loginStore((state) => state.login);

  useEffect(() => {
    isLogged().then((res) => {
      console.log('res', res);
      setLogin(res);
    }).catch((err) => {
      setLogin(false)
    })
  }, [])

  return (
    <>
      {login === true ?
        <HomeNavigation />
      :
        <AuthNavigation />
      }
    </>
  );
}

export default App;