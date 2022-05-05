import React from "react";

import {Formulario} from './Formulario'

import {Funcionalities}  from './Funcionalities'
import { TaskContainer } from "./TaskContainer";

export const Layoutprueba= ()=>{
    const layout = {
        
        height: '100%',
        width: '100%',
        backgroundColor:'pink',
    
    }
    const containerForm = {
        width: '70%',
        float: 'right',
        backgroundColor: 'red'
    }
    const containerTask = {
        width: '30%',
        float: 'left',
        backgroundColor: 'yellow'
    }
 
    return(
      
        <div style={layout}>

        <Funcionalities/>



        <div style={containerTask}>
         <TaskContainer/>

        </div>

         <div style={containerForm}>
         <Formulario/>
         </div>
        </div>

  
       
      
    )
}
