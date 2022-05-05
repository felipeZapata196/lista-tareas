import React from "react";
import {Task} from './Task'


export const TaskContainer = ()=>{
    const tasks = {
        padding: '50px',
        justifyContent: 'space-between',
        height: '70%'
    }

    const row= {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        gap: 30
    }

    const testTask = [
        {name: 'comprar huevos', info: 'lalala'},
        {name: 'comprar leche', info: 'lalala'},
        {name: 'llamar1', info: 'lalala'},
        {name: 'llamar2', info: 'lalala'},
        {name: 'llamar3', info: 'lalala'},
        {name: 'llamar4', info: 'lalala'},

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