import logo from './logo.svg';

import { NavBar } from './Components.js/NavBar';

import {Layout}  from './Components.js/Layout'

import './App.css';
import SideBar from './components/Sidebar';

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