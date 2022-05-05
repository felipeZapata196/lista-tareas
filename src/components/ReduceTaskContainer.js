
//esto es simplemente una solución rapida, luego va a ir de otra forma sin repetir tanto código.
import React from "react";
import {Task} from './Task'


export const ReduceTaskContainer = ()=>{
    const tasks = {
        padding: '50px',
        justifyContent: 'space-between',
        height: '70%',
         backgrounColor: 'black'
    }

    const row= {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 30
    }

    const testTask = [
        {name: 'comprar huevos', info: 'lalala'},
        {name: 'comprar leche', info: 'lalala'},
        {name: 'llamar', info: 'lalala'},
        {name: 'llamar', info: 'lalala'},
        {name: 'llamar', info: 'lalala'},
        {name: 'llamar', info: 'lalala'},

    ]
  
    return(
        <div style={tasks} >
       
            <div style={row}>
            
                {testTask.map(task => 
                    <Task
                        key={task.name}
                    />
                )}    
                
            </div>

        </div>
    

             
    )
}