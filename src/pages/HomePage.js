import React, { useEffect, useState } from "react"
import { NavBar } from '../components/NavBar';
import {Funcionalities}  from '../components/Funcionalities'
import {TaskContainer}  from '../components/TaskContainer'

import '../App.css';
import SideBar from '../components/Sidebar';

const HomePage = ()=> {
    const layout = {
        minHeight: '100%',
        width: '100%',
        backgroundColor:'#e5e4e2',
    }

    return (
        <div className="general-containter">
            <SideBar/>
            <div className="mainContainer">
                <NavBar/>
                <div style={layout}>
                    <Funcionalities/>
                    <TaskContainer/>
                </div>
            </div>
        </div>
    )
}

export default HomePage