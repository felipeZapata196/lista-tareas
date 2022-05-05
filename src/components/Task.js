import React from "react";


export const Task= ()=>{
    const taskStyles = {
     
        border: 'solid 1px #eee',
        boxShadow: '5px 5px 5px rgb(0, 0, 0, 0.1)',
        minWidth: '28%',
        height: '23vh',
        padding: '10px 15px',
        borderRadius: '5px',
        backgroundColor:'white',
    }
    return(
      
        <div style={taskStyles}>
            <h3>Tarea principal</h3>
            <p> prueba </p>
        </div>
    )
}
