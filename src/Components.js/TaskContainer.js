import React from "react";
import {Task} from './Task'


export const TaskContainer = ()=>{
    const tasks = {
     
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    }

  
    return(
      <div >


             <div style={tasks}>
              
              <Task/>
              
          
             </div>
            <div style={tasks}>
            
            <Task/>
            
        
            </div>

            <div style={tasks}>
            
            <Task/>
            
        
            </div>


            <div style={tasks}>
            
            <Task/>
            
        
            </div>

            <div style={tasks}>
            
            <Task/>
            
        
            </div>


    </div>

             
    )
}