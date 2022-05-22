import React, { useEffect, useState } from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Card, CardContent, Typography } from "@mui/material";
import { AccountCircle, ExpandLess, ExpandMore, Info, Assignment } from "@mui/icons-material";
import { getTask } from "../services/TaskService";
import  useStore from '../store/useStore'

const SideBar = (props) => {

    const [open, setOpen] = React.useState(false);

    const [ tasks, setTasks ] = useState([])
    const [ inProgress, setInProgress ] = useState([])
    const [ completed, setCompleted ] = useState([])

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


    // Solo renderiza el sidebar cuando hago cambios. Por lo tanto solo setea cuando cambio codigo de Sidebar.js.
    // Necesito que igual que renderiza HomePage cuando cambia algo. Renderice Sidebar
    useEffect(() => {
        setTasks(props.tasks)

        let progreso = props.tasks.filter(task => task.completed !== true)
        console.log("Prueba de salida de progreso1 ", progreso)
        setInProgress(props.tasks.filter(task => task.completed !== true))
        setCompleted(props.tasks.filter(task => task.completed === true))

        // fetchTasks()
        
    }, [])

    const fetchTasks = async () => {
        await getTask().then(async res => {
            console.log("Vuelta de getTask: ", res)
            setTasks(res)
          }).catch(err => {
            console.log('Error en el getTask ', err);
          })
    }

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

    // Lo que pasa es que no cambia el valor de task. Solo se setea la primera vez.

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
                        <ListItemButton sx={{ pl: 6 }}>
                            <ListItemText primary="Recents" />
                            <Card style={cardStyle} onClick={() => console.log("Todas las tareas ", tasks)}>
                                {tasks.length}
                            </Card>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 6 }}>
                            <ListItemText primary="In Progress" />
                            <Card style={cardStyle} onClick={() => { onlyInProgress(); console.log("Tareas en progreso ", inProgress)}}>
                                {inProgress.length}
                            </Card>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 6 }}>
                            <ListItemText primary="Completed" />
                            <Card style={cardStyle} onClick={() => { onlyCompleted(); console.log("Tareas completadas ", completed)}}>
                                {completed.length}
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