import React from "react";



export const Funcionalities= ()=>{
    const funcionalitiesStyle = {
        width: '100%',
        height: '15%',
        backgroundColor: 'blue',
        alignItems: 'center'

    }
    const  buttonStyle = {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',


    }
   
    return(
      
        <div style={funcionalitiesStyle}>
            <h1>Lista de tareas</h1>
            
           <button  slyle={buttonStyle}> new Task</button>
        </div>

  
       
      
    )
}
