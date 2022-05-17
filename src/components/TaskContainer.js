import React, { useEffect } from "react";
import { useState } from "react";
//import {Task} from './Task'
import { getAllTasks, getTask } from "../services/TaskService";
import queryStore from '../store/queryStore'
import  useStore from '../store/useStore'




export const TaskContainer = ()=>{
    
    const query = queryStore((state) =>  state.dataQuery)
   const bears = useStore(state => state.bears)
   console.log(bears)
   const [data, setData] = useState([])
    
  //const email =  JSON.stringify(localStorage.getItem("email"))
   //const local = JSON.parse(localStorage.getItem(email))


   console.log(data, 'data container')



       
   React.useEffect(()=>{
    getAllTasks(query)
    console.log("hola puto mundo")
   
    }, [bears])

    React.useEffect(()=>{
        getAllTasks(query)
       
       
        }, [query])
   
    const getAllTasks= ()=> {
        getTask().then(response =>{
            setData(response)  
            console.log(data, 'funciona?')
        const search =false
            if(query){
            setData(data.filter((task) =>{
                return task.name.match(query)
            }))
            
        }
            })
            .catch( err => {
                console.error(err)
            })
    
    }     
    


 
    return(
        <div style={tasks} >
       
       
            <div style={row}>
        

                {data.map(task => 
                       <div style={taskStyles}>
                       <h2>{task.name}</h2>
                       <h1>{bears} around here ...</h1>
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