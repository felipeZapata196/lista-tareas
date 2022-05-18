import React, { useEffect, useState } from "react";
import {Task} from './Task'
import { getTask } from "../services/TaskService";
import queryStore from '../store/queryStore'
import  useStore from '../store/useStore'
import { tasksStore } from "../store/tasksStore";

export const TaskContainer = ()=>{
    
    const query = queryStore((state) =>  state.dataQuery)
    const bears = useStore(state => state.bears)

    const data = tasksStore(state => state.data)
    const setData = tasksStore(state => state.setData)
       
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
       
       {data.map((task) =>
                    <Task id={task.id} name={task.name} description={task.description}/> 
                )}
        </div>  
    )
}

const tasks = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%'
}