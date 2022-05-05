import React from "react";
import {Task} from './Task'
import './Formulario.css'


export const Formulario = ()=>{
    
    const cardFormulario = {
        borderRadius: '4px',
        backgroundColor: '#fff',
      
    }
    
  
    return(
  
            <div style={cardFormulario}>
            
            <form style={{padding:80}}>
               <div className="field">
                   <label> Name</label>
                    <input></input>
                </div> 
                <div className="field">
                   <label>Date</label>
                    <input></input>
                </div> 
                <div className="field">
                   <label>Description</label>
                    <input></input>
                </div> 
           

            </form>


            </div>
       
            

    

             
    )
}