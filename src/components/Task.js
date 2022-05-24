import React, { useEffect, useState} from "react";
import { Card, CardContent, CardHeader, Typography, Checkbox, CardActions } from "@mui/material";
import { QueryBuilder, DeleteOutline, EditOutlined } from '@mui/icons-material';

export const Task = props =>{ 

    const [ edit, setEdit ] = useState(false)
    const [ fewdays, setFewDays ] = useState(false)
    const [ idTask, setIdTask ] = useState(1)
    const due = 2

    return(
        <div style={tasks}>
            {!edit ?
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
                    <Typography variant="h4" component="h2">
                        <b>{props.name}</b>
                    </Typography>
                    {!props.completed ?
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
                    <Checkbox color="success" onChange={(e) => { props.changeState(props.id)}}
                    checked={props.completed}
                    />
                    <Typography style={{fontSize: 18, marginRight: 7}} color="textSecondary" component="p">
                        12 May 2022
                    </Typography>
                </CardActions>
            </Card>
            :
            <Card style={taskStyle2} >
                <CardHeader style={alertStyle}
                    subheader={`Due in ${due} days`}
                    action={
                        <>
                        <QueryBuilder sx={{color: 'orange'}} />
                        </>
                    }
                >
                </CardHeader>
                <CardContent style={{margin: 3}} onClick={() => {setEdit(!edit);  setFewDays(!fewdays)}}>
                    
                    <Typography variant="h4" component="h2" style={{display: 'flex', flexDirection: 'row' ,justifyContent: 'space-between'}}>
                        <b>{props.name}</b>
                        <div>
                            <EditOutlined sx={{ "&:hover": { color: "black" }, fontSize: 30, cursor: 'pointer', color: 'gray' }} 
                            onClick={() => console.log('Función editTask')} />
                            <DeleteOutline sx={{ "&:hover": { color: "red" }, fontSize: 30, cursor: 'pointer', color: 'gray' }} 
                            onClick={() => props.showDelete(props.id)} />
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

