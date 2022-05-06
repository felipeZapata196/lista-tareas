import React from "react";
import {TaskContainer}  from './TaskContainer'
import {Funcionalities}  from './Funcionalities'
import {Formpage}  from './Formpage'
import {useState}  from 'react'


export const Layout= ()=>{
    const layout = {
        
        height: '100%',
        width: '100%',
        backgroundColor:'#e5e4e2',
    
    }
    const valor =true
    return(
      
        <div style={layout}>
            <Funcionalities/>
            <TaskContainer/>
       
            


        </div>

  
       
      
    )
}

