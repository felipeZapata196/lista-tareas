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

        <div style={{display:'flex', width: '33%', justifyContent: 'center', alignItems: 'center', marginBottom: '35px'}}>
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
                     <Typography variant="h4" component="h3"  color="#3d3939"
                     
                     >
                        <div style={{display: 'flex', flexDirection: 'row' }}>
                            <b>{props.name}</b>

                            <div style={{marginLeft:'5px'}}>
                            {!props.completed ?
                            <Checkbox onChange={(e) => { props.changeState(props.id)}}
                            checked={props.completed}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 30} }}
                            />
                            :
                            <Checkbox  onChange={(e) => { props.changeState(props.id); }}
                            checked={props.completed}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                            />
                            }
                            </div>
                            

                        </div>
                      
                    </Typography>
                 
                    <Typography style={descriptionStyle} color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions style={{flexDirection:'row', }} >
                   <div style={{width:'100%',display: 'flex', justifyContent:"space-between"}}>

                        <Typography style={positionDate} color="textSecondary" component="p">
                           {props.date}
                        </Typography>
                    
                        <div style={{display: 'flex',}}>
                            <EditOutlined sx={{ "&:hover": { color: "black" }, fontSize: 28, cursor: 'pointer', color: 'gray', paddingRight: '5px'}} 
                            onClick={handleOpen}/>
                            
                            <DeleteOutline sx={{ "&:hover": { color: "red" }, fontSize: 28, cursor: 'pointer', color: 'gray' }} 
                            onClick={() => props.showDelete(props.id)} />
                        </div>
                    </div>
      
                </CardActions>


            </Card>
            {/* SOLUCIÓN PARA SACAR LOS DATOS AL EDITAR (Pasar a EditTask el nombre, descripción y fecha) ->   */}
            <EditTask 
                                        handleClose={handleClose}
                                        open={open}
                                        id={props.id}
                                        editTasks={props.editTasks}
                                        name={props.name}
                                        description={props.description}
                                        date={props.date}
                                        />
          
            {/* <TaskContext.Provider value={[idTask, edit]}>{props.children}</TaskContext.Provider> */}
        </div>
        </div>
    )
}
const tasks = {
    width: '90%',
    
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
    width: '45%'
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