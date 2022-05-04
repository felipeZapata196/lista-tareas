import React from "react";


export const Task= ()=>{
    const taskStyles = {
     
        border: 'solid 1px #eee',
        boxShados: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px',
    }
    return(
      
        <div style={taskStyles}>

       
        <h3>tarea 1</h3>
        <p> tarea 2 </p>
       
        </div>
    )
}
