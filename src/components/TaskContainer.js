import React from "react";
import {Task} from './Task'


export const TaskContainer = ()=>{
    const tasks = {
     
        display: 'flex',
        flexDirection: 'row',
        

    }
    const taskStyles = {
     
        border: 'solid 1px #eee',
        boxShados: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px',
    }
    const testTask = [
        {name: 'comprar huevos', info: 'lalala'},
        {name: 'comprar leche', info: 'lalala'},
        {name: 'llamar', info: 'lalala'},

    ]
  
    return(
      <div style={tasks} >
       
        <div className="taskStyles">
            Hola mundo
        </div>
           <div className="taskStyles">
            Hola mundo
        </div>
      


           

    </div>
    

             
    )
}