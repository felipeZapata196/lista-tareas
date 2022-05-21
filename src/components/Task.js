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
        console.log(props.completed)
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
                     <Typography variant="h4" component="h2"  color="textSecondary">
                        <b>{props.name}</b>
                      
                    </Typography>
                    <div style={{display: 'flex', flexDirection: 'row' }}>
                    {!completeTask ?
                        <Typography style={stateTaskStyle} color="#0209b1" component="p">
                            <b>In Progress</b>
                        </Typography>
                        :
                        <Typography style={stateTaskStyle} color="#046307" component="p">
                            <b>Completed</b>
                        </Typography>
                    }
                    
                    <Checkbox color="success" onChange={(e) => { props.changeState(props.id); setCompleteTask(!completeTask)}}
                         checked={completeTask}
                        />

                    </div>
                    <Typography style={descriptionStyle} color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions style={{display: 'flex',flexDirection:'row'}} >
                   
                   <Typography style={positionDate} color="textSecondary" component="p">
                        12 May 2022
                    </Typography>
                
                        <div style={{display: 'flex', float: "right"}}>
                            <EditOutlined sx={{ "&:hover": { color: "black" }, fontSize: 25, cursor: 'pointer', color: 'gray' }} 
                            onClick={handleOpen}/>
                           
                            <DeleteOutline sx={{ "&:hover": { color: "red" }, fontSize: 25, cursor: 'pointer', color: 'gray' }} 
                            onClick={() => props.showDelete(props.id)} />
                        </div>
      

                                    <EditTask 
                                        handleClose={handleClose}
                                        open={open}
                                        id={props.id}
                                        editTasks={props.editTasks}
                        
                                        />
                </CardActions>
            </Card>
          
            {/* <TaskContext.Provider value={[idTask, edit]}>{props.children}</TaskContext.Provider> */}
        </div>
    )
}
const tasks = {
    width: '29%',
    
    marginBottom: '2%',
    flexDirection: 'column',
   
}

const taskStyle1 = {
    display: 'flex',
    flexDirection: 'column',
    height: 280,

    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    cursor: 'default'
}

const positionDate = {
    
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
    
}

const descriptionStyle = {
    maxHeight: 150,
    overflowY: 'scroll',
    fontSize: 20,
    wordWrap: 'break-word'
}