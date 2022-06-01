import React, {useState} from "react";
import { Card, CardContent, Typography, Checkbox, CardActions } from "@mui/material";
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { EditTask } from "./EditTask";
import { getTask, updateTasks } from "../services/TaskService";
import swal from "sweetalert";

export const Task = props =>{ 

    const [open, setOpen] = useState(false);
    const [ edit, setEdit ] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

     /*DeleteTaks*/
     const showDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Task will be deleted",
            icon: "warning",
            buttons: true,
            dangerMode: true
        })
        .then((willDelete) => {
         
            if ( willDelete ) {
                swal("Poof! Task has been deleted successfully", {
                    icon: "success",
                })
                getTask().then((res) => {
                    let data =(res.filter((task)=> task.id !==id))
                    updateTasks(data)
                })
            }
            props.setChange(!props.change)
        });
    }

    /*ChageState*/
    const changeState = async (id) => {
        await getTask().then( async (res) => {
            let data = await res.map(task => {
                if (task.id === id) {
                    task.completed = !task.completed
                    return task
                } else {
                    return task
                }
            })
            updateTasks(data)
            props.setChange(!props.change)
        })
    }

    /*EditTasks*/
    const editTasks = async (id, name, description, date) => {
        await getTask().then((res) => {
            let edited = res.map(task => {
                if (task.id === id) {
                    task.name = name
                    task.description = description
                    task.date = date
                    return task
                } else{
                    return task
                }
            })
            updateTasks(edited)
            props.setChange(!props.change)
        })
    }

    return(
        <div style={{display:'flex', width: '33%', justifyContent: 'center', alignItems: 'center', marginBottom: '35px'}}>
            <div style={tasks}>
                <Card style={taskStyle1} >
                    <CardContent style={{margin: 3}} onClick={() => { setEdit(!edit) }}>
                        <Typography variant="h4" component="h3"  color="#3d3939">
                            <div style={{display: 'flex', flexDirection: 'row' }}>
                                <b>{props.name}</b>

                                <div style={{marginLeft:'5px'}}>
                                    {!props.completed ?
                                    <Checkbox onChange={(e) => { changeState(props.id)}}
                                    checked={props.completed}
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 30} }}
                                    />
                                    :
                                    <Checkbox  onChange={(e) => { changeState(props.id); }}
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
                                onClick={() => showDelete(props.id)} />
                            </div>
                        </div>
                    </CardActions>
                </Card>
                <EditTask 
                    handleClose={handleClose}
                    open={open}
                    id={props.id}
                    editTasks={editTasks}
                    name={props.name}
                    description={props.description}
                    date={props.date}
                />
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

const descriptionStyle = {
    maxHeight: 150,
    overflowY: 'scroll',
    fontSize: 20,
    wordWrap: 'break-word'
}