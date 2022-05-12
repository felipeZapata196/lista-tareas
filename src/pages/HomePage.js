import React, { useEffect, useState } from "react"
import { NavBar } from '../components/NavBar';
import {Layout}  from '../components/Layout'
//import {Layoutprueba}  from './components/Layoutprueba'
import '../App.css';
import SideBar from '../components/Sidebar';

const HomePage = ()=> {



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
    )
}

export default HomePage