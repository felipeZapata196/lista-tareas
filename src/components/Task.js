import React, { useEffect, useState} from "react";
import { Card, CardContent, CardHeader, Typography, Checkbox, CardActions } from "@mui/material";
import { QueryBuilder, DeleteOutline, EditOutlined } from '@mui/icons-material';
import { EditTask } from "./EditTask";


export const Task = props =>{ 



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [ edit, setEdit ] = useState(false)
    const [ completeTask, setCompleteTask ] = useState(false)
    const [ fewdays, setFewDays ] = useState(false)
    const [ idTask, setIdTask ] = useState(1)
    const due = 2


    useEffect(() => {
        setCompleteTask(props.completed)
    }, [])

    return(
        <div style={tasks}>
          
            <Card style={taskStyle1} >
                {fewdays && 
                    <CardHeader style={alertStyle}
                    subheader={`Due in ${due} days`}
                    action={
                        <QueryBuilder style={{color: 'orange'}} />
                    }
                />
                }
                <CardContent style={{margin: 3}} onClick={() => { setEdit(!edit); setIdTask(props.id) }}>
                <Typography variant="h4" component="h2" style={{display: 'flex', flexDirection: 'row' ,justifyContent: 'space-between'}}>
                        <b>{props.name}</b>
                        <div>
                            <EditOutlined sx={{ "&:hover": { color: "black" }, fontSize: 30, cursor: 'pointer', color: 'gray' }} 
                            onClick={handleOpen} />
                            <EditTask 
                            handleClose={handleClose}
                            handleOpen={handleOpen}
                            open={open}
                            id={props.id}
                            editTasks={props.editTasks}
            
                            />
                            <DeleteOutline sx={{ "&:hover": { color: "red" }, fontSize: 30, cursor: 'pointer', color: 'gray' }} 
                            onClick={() => props.showDelete(props.id)} />
                        </div>
                    </Typography>
                    {!completeTask ?
                        <Typography style={stateTaskStyle} color="blue" component="p">
                            <b>In Progress</b>
                        </Typography>
                        :
                        <Typography style={stateTaskStyle} color="green" component="p">
                            <b>Completed</b>
                        </Typography>
                    }
                </CardContent>
                <CardActions style={{display: 'flex', justifyContent: 'space-between'}} >
                    <Checkbox color="success" onChange={(e) => { props.changeState(props.id); setCompleteTask(!completeTask)}}
                    checked={completeTask}
                    />
                    <Typography style={{fontSize: 18, marginRight: 7}} color="textSecondary" component="p">
                        12 May 2022
                    </Typography>
                </CardActions>
            </Card>
          
            {/* <TaskContext.Provider value={[idTask, edit]}>{props.children}</TaskContext.Provider> */}
        </div>
    )
}
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
    backgroundColor: '#FFFFFF',
    cursor: 'default'
}
const taskStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 6,
    border: 'solid 1.5px blue',
    backgroundColor: '#FFFFFF',
    cursor: 'default'
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