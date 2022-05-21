import React, { useEffect, useState } from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Card, CardContent, Typography } from "@mui/material";
import { AccountCircle, ExpandLess, ExpandMore, Info, Assignment } from "@mui/icons-material";
import { getTask } from "../services/TaskService";

const SideBar = () => {

    const [open, setOpen] = React.useState(false);

    const [ inProgress, setInProgress ] = useState([])
    const [ completed, setCompleted ] = useState([])

    const openFilters = () => {
        setOpen(!open);
    };

  
    // Necesito usar el getTask, para recoger todos las tareas y luego hacer un filter del estado de las tareas

    let cambio = false;
    const [ filter, setFilter ] = useState(false)
    const [ tasks, setTasks ] = useState([])

    useEffect(() => {
        getTask().then( res => {
            console.log("Vuelta de getTask: ", res)
            setTasks(res)
        }).catch(err => {
            console.log('Error en el getTask ', err);
        })
    }, [])

    // const nuevaFunc = () => {
    //     getTask().then( res => {
    //         console.log("getTask devuelve: ", res)
            
    //         setAll(res);
    //         setInProgress(res.filter(task => task.completed !== true))
    //         setCompleted(res.filter(task => task.completed === true))

    //         // setFilter(!filter)
    //       }).catch(err => {
    //         console.log('Error en el getTask ', err);
    //       })
    // }

    // Lo que pasa es que no cambia el valor de task. Solo se setea la primera vez

    const onlyInProgress = () => {
        setInProgress(tasks.filter(task => task.completed !== true))
    }

    const onlyCompleted = () => {
        setCompleted(tasks.filter(task => task.completed === true))
    }

    return (
        <div  style={contentAll}>
            <h1 style={titleStyle}>Listapp</h1>
            <List
                sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton>
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="My account" />
                </ListItemButton>
                <ListItemButton onClick={openFilters}>
                    <ListItemIcon>
                        <Assignment />
                    </ListItemIcon>
                    <ListItemText primary="My Tasks" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 6 }}>
                            <ListItemText primary="Recents" />
                            <Card style={cardStyle} onClick={() => console.log("Todas las tareas ", tasks)}>
                                12
                            </Card>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 6 }}>
                            <ListItemText primary="In Progress" />
                            <Card style={cardStyle} onClick={() => { onlyInProgress(); console.log("Tareas en progreso ", inProgress)}}>
                                8
                            </Card>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 6 }}>
                            <ListItemText primary="Completed" />
                            <Card style={cardStyle} onClick={() => { onlyCompleted(); console.log("Tareas completadas ", completed)}}>
                                4
                            </Card>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton>
                    <ListItemIcon>
                        <Info />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItemButton>
            </List>
        </div>
    )
}

const cardStyle = {
    width: '30px',
    height: '20px',
    fontSize: 14,
    textAlign: 'center'
}

const contentAll = {
    float: 'left',
    height: '100%',
    width: '100%',
    paddingTop: '40px',
    backgroundColor: 'white'
}

const titleStyle = {
    fontSize: '40px',
    paddingLeft: '40px'
}

export default SideBar