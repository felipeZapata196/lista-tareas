import React from "react";


export const Task= ()=>{
    const taskStyles = {
     
        border: 'solid 1px #eee',
        boxShadow: '5px 5px 5px rgb(0, 0, 0, 0.1)',
        minWidth: '28vw',
        height: '23vh',
        padding: '10px 15px',
        borderRadius: '3px',
        backgroundColor:'white',
    }
    return(
      
        <div style={taskStyles}>
            <h2>Tarea principal</h2>
            <div style={{width: '50px'}}>
            <p  style={{width: '50px'}}> prueba </p>
            </div>
           
        </div>
    )
}
