import React from "react";
import { useState } from "react";
import {Task} from './Task'
import { getTask } from "../services/TaskService";
import queryStore from '../store/queryStore'

export const TaskContainer = ()=>{
    
    const query = queryStore((state) =>  state.dataQuery)
    //let search = false;
    let [data, setData] = useState([])
   const [request, setRequest ] =useState([])

    React.useEffect(()=>{
        getAllTasks()
        console.log(query)
    }, [])
    const search =true
    const getAllTasks = (query) => {
        if(search  ===  true){
            getTask().then(response =>{
                setRequest(response)    
                setData(request.filter(task => task.name ===query))
                console.log(data, "hola")
                //esto genera un bucle, entender por qué
                
                })
                .catch( err => {
                    console.error(err)
                })
        }else {
            getTask().then(response =>{
                setData(data =response)    
                
                })
                .catch( err => {
                    console.error(err)
                })
        }
      
    }
 
    return(
        <div style={tasks} >
       
            <div style={row}>
            
                {data.map(task => 
                       <div style={taskStyles}>
                       <h2>{task.name}</h2>
                       <p style={{width:'300px'}}> {task.description} </p>
                        </div>
                )}
        

                
            </div>

        </div>
    

             
    )



}

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
const taskStyles = {
 
    border: 'solid 1.5px #eee',
    boxShadow: '5px 5px 5px rgb(0, 0, 0, 0.1)',
    minWidth: '28%',
    height: '30vh',
    padding: '10px 15px',
    borderRadius: '3px',
    backgroundColor:'white',
}