import React from "react";
import {TaskContainer}  from './TaskContainer'
import {Funcionalities}  from './Funcionalities'

export const Layout= ()=>{
    const layout = {
        
        height: '100%',
        width: '100%',
        backgroundColor:'#e5e4e2',
    
    }
 
    return(
      
        <div style={layout}>
            <Funcionalities/>
       
            <TaskContainer/>
            



        </div>

  
       
      
    )
}

