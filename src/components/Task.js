import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { QueryBuilder, DeleteOutline, EditOutlined, DataObjectSharp } from '@mui/icons-material';
import { getTask } from "../services/TaskService";
import swal from 'sweetalert';
import { tasksStore } from "../store/tasksStore";

export const Task = props =>{

    const data = tasksStore(state => state.data)
    const setData = tasksStore(state => state.setData)

    const [ edit, setEdit ] = useState(false)

    const [ completeTask, setCompleteTask ] = useState(false)

    const [ fewdays, setFewDays ] = useState(false)

    const due = 2

    const tasks = {
        width: '27%',
        marginBottom: '2%',
        flexDirection: 'column',
    }

    const taskStyle1 = {
        display: 'flex',
        flexDirection: 'column',
        height: 300,
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 6,
        border: 'solid 1px gray',
        backgroundColor: '#FFFFFF'
    }
    const taskStyle2 = {
        display: 'flex',
        flexDirection: 'column',
        height: 300,
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 6,
        border: 'solid 1.5px blue',
        backgroundColor: '#FFFFFF'
    }

    const borderBlue = {
        border: 'solid 1.5px blue'
    }
    
    const positionDate = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 7,
        fontSize: 18,
    }

    const alertStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 2,
        paddingRight: 10,
        fontSize: 12,
        textAlign: "end"
    }

    const stateTaskStyle = {
        display: 'flex',
        fontSize: 25, 
        textAlign: "center",
        justifyContent: "center",
        paddingTop: 50
    }

    const descriptionStyle = {
        maxHeight: 150,
        overflowY: 'scroll',
        fontSize: 20,
        wordWrap: 'break-word'
    }

    const email = JSON.stringify(localStorage.getItem("email"))

    const showDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Task will be deleted",
            icon: "warning",
            buttons: true,
            dangerMode: true
        })
        .then((willDelete) => {
            console.log(willDelete);
            if ( willDelete ) {
                swal("Poof! Task has been deleted successfully", {
                    icon: "success",
                })
                let datos = (data.filter((task) => task.id !== id))
                
                console.log('Tareas que quedan ', datos)
                setData(datos)
                localStorage.setItem(email, JSON.stringify(datos));
            }
        });
    }

    return (
        <div style={tasks}>
            {!edit ? 
            <Card style={taskStyle1} onClick={() => { setEdit(!edit) }}>
                {fewdays && 
                    <CardHeader style={alertStyle}
                    subheader={`Due in ${due} days`}
                    action={
                        <QueryBuilder style={{color: 'orange'}} />
                    }
                />
                }
                <CardContent style={{margin: 3}}>
                    <Typography variant="h4" component="h2">
                        <b>{props.name}</b>
                    </Typography>
                    {!completeTask ?
                        <Typography style={stateTaskStyle} color="blue" component="p">
                            <b>In Progress</b>
                        </Typography>
                        :
                        <Typography style={{fontSize: 25, textAlign: "center", paddingTop: 40 }} color="green" component="p">
                            <b>Completed</b>
                        </Typography>
                    }
                </CardContent>
                <Typography style={positionDate} color="textSecondary" component="p">
                        12 May 2022
                </Typography>
            </Card> :
            <Card style={taskStyle2} onClick={() => {setEdit(!edit); setCompleteTask(!completeTask); setFewDays(!fewdays)}}>
                <CardHeader style={alertStyle}
                    subheader={`Due in ${due} days`}
                    action={
                        <>
                        <QueryBuilder sx={{color: 'orange'}} />
                        </>
                    }
                >
                </CardHeader>
                <CardContent style={{margin: 3}}>
                    
                    <Typography variant="h4" component="h2" style={{display: 'flex', flexDirection: 'row' ,justifyContent: 'space-between'}}>
                        <b>{props.name}</b>
                        <div>
                            <EditOutlined sx={{ "&:hover": { color: "black" }, fontSize: 30, cursor: 'pointer', color: 'gray' }} 
                            onClick={() => console.log('Función editTask')} />
                            <DeleteOutline sx={{ "&:hover": { color: "red" }, fontSize: 30, cursor: 'pointer', color: 'gray' }} 
                            onClick={() => showDelete(props.id)} />
                        </div>
                    </Typography>
                    <Typography style={descriptionStyle} color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
                <Typography style={positionDate} color="textSecondary" component="p">
                        12 May 2022
                </Typography>
            </Card>
            }
        </div>
    )
}