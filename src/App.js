import logo from './logo.svg';

import { NavBar } from './Components/NavBar';

import {Layout}  from './Components/Layout'

import './App.css';
import SideBar from './Components/Sidebar';

function App() {
  return (
   <div className="general-containter">

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