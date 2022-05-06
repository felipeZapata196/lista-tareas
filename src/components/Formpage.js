import React from "react";

import {Formulario} from './Formulario'
import { TaskContainer } from "./TaskContainer";

export const Formpage= ()=>{
    const layout = {
        
        height: '100%',
        width: '100%',
       
    
    }
    const containerForm = {
        width: '70%',
        float: 'right',
    
    }
    const containerTask = {
        width: '30%',
        float: 'left',
    }
 
    return(
      

        <div>

        <div style={containerTask}>
         <TaskContainer/>

        </div>

         <div style={containerForm}>
         <Formulario/>
         </div>
        </div>

  
       
      
    )
}
