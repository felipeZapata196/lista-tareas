import React from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Card, CardContent, Typography } from "@mui/material";
import { AccountCircle, ExpandLess, ExpandMore, Info, Assignment } from "@mui/icons-material";

const SideBar = () => {

    const [open, setOpen] = React.useState(false);

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
                            <Card style={cardStyle}>
                                12
                            </Card>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 6 }}>
                            <ListItemText primary="In Progress" />
                            <Card style={cardStyle}>
                                8
                            </Card>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 6 }}>
                            <ListItemText primary="Completed" />
                            <Card style={cardStyle}>
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

export default SideBar