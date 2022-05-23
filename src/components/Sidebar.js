import React, { useEffect, useState } from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Card, CardContent, Typography } from "@mui/material";
import { AccountCircle, ExpandLess, ExpandMore, Info, Assignment } from "@mui/icons-material";

const SideBar = (props) => {

    const [open, setOpen] = React.useState(false);

    const openFilters = () => {
        setOpen(!open);
    };

    // Crear una función y poner el props.setShowAll dentro.
    // const showRecents = () => {
    //     props.setshowAll(true)
    // }

    // const showInProgress = () => {
    //     props.setshowAll(false)
    //     props.setFilterTasks(false)
    // }

    // const showCompleted = () => {
    //     props.setshowAll(false)
    //     props.setFilterTasks(true)
    // }

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
                        <ListItemButton sx={{ pl: 6 }} onClick={() => props.recentTasks(true)}>
                            <ListItemText primary="Recents" />
                            <Card style={cardStyle}>
                                {props.recents}
                            </Card>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 6 }} onClick={() => {props.stateTasks(false, false); console.log(props.inProgress)}}>
                            <ListItemText primary="In Progress" />
                            <Card style={cardStyle} >
                                {props.inProgress}
                            </Card>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 6 }} onClick={() => {props.stateTasks(false, true); console.log(props.completed)}}>
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