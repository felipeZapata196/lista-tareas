import React, { useContext, useEffect, useState, createContext } from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Card, CardContent, Typography } from "@mui/material";
import { AccountCircle, ExpandLess, ExpandMore, Info, Assignment } from "@mui/icons-material";
import { Formulario } from "./Formulario";
import { getTask } from "../services/TaskService";

export const FilterContext = createContext({
    nameFilter: 'Recent tasks',
    setNameFilter: (name) => {}
});

const SideBar = (props) => {

    const [open, setOpen] = React.useState(false);

    const [ nameFilter, setNameFilter ] = useState('Recent tasks')

    const [recents, setRecents ] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [completed, setCompleted] = useState([])

    // FilterContext = createContext({nameFilter});

    useEffect(() => {
        listAll()
        console.log("Valor de ", props.change)
    }, [props.change])

    /*Sidebar funcionalities*/
    const listAll = async () => {
        await getTask().then(res => {
            setRecents(res)
            setInProgress(res.filter(task => task.completed !== true))
            setCompleted(res.filter(task => task.completed === true))
        })
    }

    const openFilters = () => {
        setOpen(!open);
    };

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

                        <ListItemButton className={"recents"} defaultValue={"recents"} sx={{ pl: 6 }} onClick={() => {props.getAllTasks(); FilterContext.setNameFilter("Recent tasks")} } >
                            <ListItemText primary="Recents" />
                            <Card style={cardStyle}>
                                {recents.length}
                            </Card>
                        </ListItemButton>
                        
                        <ListItemButton name={"inProgress"} sx={{ pl: 6 }} onClick={() => {props.filterBy(false); FilterContext.setNameFilter("In progress tasks")}}>
                            <ListItemText primary="In Progress" />
                            <Card style={cardStyle} >
                                {inProgress.length}
                            </Card>
                        </ListItemButton>

                        <ListItemButton name={"completed"} sx={{ pl: 6 }} onClick={() => {props.filterBy(true); FilterContext.setNameFilter("Completed tasks")}}>
                            <ListItemText primary="Completed" />
                            <Card style={cardStyle} >
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
            {/* <FilterContext.Provider 
                value={nameFilter}
            >
                <Formulario nameFilter={nameFilter} />
            </FilterContext.Provider> */}
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