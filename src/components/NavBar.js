import React, { useEffect, useState } from "react";
import { Avatar, Menu, MenuItem, Typography, Box, ListItemIcon } from "@mui/material";
import { doLogout } from "../services/user.service";
import { loginStore } from '../store/loginStore';
import { Logout, ExpandMore } from "@mui/icons-material";

export const NavBar = ()=>{
    const navbarStyles ={
        display:'flex',
        flexDirection: 'row',
        height: '11%',
        justifyContent: 'space-between',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)',
    }

    const container = {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center'
    }

    const left = {
        flex: 1,
        justifyContent: 'center',
        float: 'left',
        paddingLeft: '13%'
    }

    const middle = {
        flex: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        marginLeft: '10%',
        float: 'left'
    }

    const right = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        float: 'right',
        marginRight: '10%',
        marginLeft: '7%',
        cursor: "pointer"
    }

    const inputSearch = {
        fontSize: '20px',
        padding: '10px',
        width: '60%'
    }

    const buttonSearch = {
        fontSize: '20px',
        padding: '12px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none'
    }

    const styleNameUser = {
        paddingLeft: "15px",
    }

    const date = '5 May 2022'

    const [anchorEl, setAnchorEl] = useState(null)
    const openMenu = Boolean(anchorEl)

    let myUser = JSON.parse(localStorage.getItem("user"));
    const setLogin = loginStore(state => state.setLogin)

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    useEffect(() => {
        if (myUser === null){
            myUser = JSON.parse(localStorage.getItem("user"));
        }
    })

        return(
            <nav style={navbarStyles}>
               <div className="top-container" style={container}>
                   <div style={left}>
                       <p>{date}</p>
                   </div>
                    <div className="content-input" style={middle}>
                        <input className="ipSearch" style={inputSearch} type="text" required placeholder="Enter task name"/>
                        <button className='btnSearch' style={buttonSearch} type="submit" onClick={() => console.log("Boton de search")}>Search</button>
                    </div>
                    <div className="content-btnLogin" style={right}>
                        <Box sx={{ display: 'flex', alignItems: 'center'}} >
                            <Avatar
                                sx={{ width: 60, height: 60 }}
                                src={myUser.avatar}
                            />
                            <Typography 
                                variant="span" 
                                fontSize={"21px"} 
                                style={styleNameUser}
                            >
                            {myUser.first_name} {myUser.last_name}
                            </Typography>
                            <ExpandMore 
                                onClick={handleOpen}
                                aria-expanded={openMenu ? "true" : undefined}
                            />
                            <Menu
                                open={openMenu}
                                onClose={handleClose}
                                anchorEl={anchorEl}
                            >
                                <MenuItem>{myUser.email}</MenuItem>
                                <MenuItem onClick={() => { setLogin(false); doLogout() }}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </Box>
                    </div>
                </div>
            </nav>  
        )
    // Para buscar por nombre usaremos filter y buscaremos en el estado de la lista de tasks.
}