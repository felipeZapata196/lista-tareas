import React, { useEffect, useState } from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Card, CardContent, Typography } from "@mui/material";
import { AccountCircle, ExpandLess, ExpandMore, Info, Assignment } from "@mui/icons-material";
import { getTask } from "../services/TaskService";
import  useStore from '../store/useStore'

const SideBar = (props) => {

    // Necesito que al clicar en inProgress 
    // La lista de tareas en progreso las tengo en Home

    const [open, setOpen] = React.useState(false);

    // const [ recents, setRecents ] = useState([])
    // const [ inProgress, setInProgress ] = useState([])
    // const [ completed, setCompleted ] = useState([])

    const items = useStore(state => state.items)

    const openFilters = () => {
        setOpen(!open);
    };

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

    // useEffect(() => {
    //     // setRecents(props.recents)

    //     // // let progreso = props.tasks.filter(task => task.completed !== true)
    //     // // console.log("Prueba de salida de progreso1 ", progreso)
    //     // setInProgress(props.inProgress)
    //     // setCompleted(props.completed)

    //     // console.log("Que trae props.inProgress ", props.inProgress)

    //     // fetchTasks()
        
    // }, [])


    const onlyInProgress = () => {
        // setInProgress(tasks.filter(task => task.completed !== true))
        // setInProgress(props.tasks.filter(task => task.completed !== true))
    }

    const onlyCompleted = () => {
        // setCompleted(tasks.filter(task => task.completed === true))
        // console.log("Lista de tareas en progreso ",inProgress)
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
                        <ListItemButton className={"recents"} defaultValue={"recents"} sx={{ pl: 6 }} onClick={(e) => props.filterState("recents")}>
                            <ListItemText primary="Recents" />
                            <Card style={cardStyle}>
                                {props.recents}
                            </Card>
                        </ListItemButton>
                        <ListItemButton name={"inProgress"} sx={{ pl: 6 }} onClick={(e) => props.filterState("inProgress")}>
                            <ListItemText primary="In Progress" />
                            <Card style={cardStyle} >
                                {props.inProgress}
                            </Card>
                        </ListItemButton>
                        <ListItemButton name={"completed"} sx={{ pl: 6 }} onClick={(e) => props.filterState("completed")}>
                            <ListItemText primary="Completed" />
                            <Card style={cardStyle} >
                                {props.completed}
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

export default SideBar