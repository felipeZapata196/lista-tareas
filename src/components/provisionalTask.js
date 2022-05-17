import React from "react";
import { useState } from "react";
import {Task} from './Task'
import { getTask } from "../services/TaskService";
// import queryStore from '../store/queryStore'

export const ProvisionalTasks = ()=>{

    // const query = queryStore((state) =>  state.dataQuery)

    const [data, setData ] = useState([])

    React.useEffect(()=>{
        getTask().then(response =>{
            setData(response)
        })
        .catch( err => {
            console.error(err)
        })
    }, [])


    return(
        <div style={tasks} >

                {data.map((task) =>
                    <Task id={task.id} name={task.name} description={task.description}/>
                    //    <div style={taskStyles}>
                    //    <h2>{task.name}</h2>
                    //    <p style={{width:'300px'}}> {task.description} </p>
                    //     </div>
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