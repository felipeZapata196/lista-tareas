import logo from './logo.svg';

import { NavBar } from './components/NavBar';

import {Layout}  from './components/Layout'
//import {Layoutprueba}  from './components/Layoutprueba'
import './App.css';
import SideBar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import { loginStore } from './store/loginStore';
import { useEffect } from 'react';
import { isLogged } from './services/auth.service';

function App() {

  const setLogin = loginStore(state => state.setLogin)
  const login = loginStore((state) => state.login);

  useEffect(() => {
    isLogged().then((res) => {
      console.log('res', res);
      setLogin(true);
    }).catch((err) => {
      setLogin(false)
    })
  }, [])

  return (
   <div className="general-containter">

     <LoginPage />
      <div className="sidebar">

     <SideBar />

      </div>

      <div className="mainContainer">
        <NavBar/>

        <Layout/>






      </div>



   </div>
  );
}

export default App;