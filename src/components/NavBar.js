import React, {useState, useEffect} from "react"
import { Avatar, Menu, MenuItem, Typography, Box, ListItemIcon } from "@mui/material";
import { doLogout } from "../services/user.service";
import { loginStore } from '../store/loginStore';
import { Logout, ExpandMore } from "@mui/icons-material";
import moment from 'moment'
import { getTask } from "../services/TaskService";

export const NavBar= (props) =>{
   
    const today = moment().format('ll');
    const [anchorEl, setAnchorEl] = useState(null)
    const [ withUser, setWithUser ] = useState(null)
    const [search, setSearch]= useState('')
    const setLogin = loginStore(state => state.setLogin)
    const openMenu = Boolean(anchorEl)

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    /*SearchTask*/
    const filter = (itemSearch)=>{
        getTask().then((res) => {
            let results = res.filter( (item)=>{
                if(item.name.toLowerCase().includes(itemSearch.toLowerCase())){
                     return item
                 }});
            props.setTasks(results)
        })    
    }

    const handleChange = (e)=>{
        filter(e.target.value)
        setSearch(e.target.value)
    }

    const getUser = async () => {
        if (localStorage.getItem("user")) {
            const user = await JSON.parse(localStorage.getItem("user"));
            await setWithUser(user);
        }
    }
  
    useEffect(()=>{
        getUser();
      
    }, [])

    return(
        <nav style={navbarStyles}>
        <div className="top-container" style={container}>
            <div style={left}>
                <p>{today}</p>
            </div>
             <div className="content-input" style={middle}>
                <input className="ipSearch" style={inputSearch}  name="search" value={search}  onChange={handleChange} type="text"  required placeholder="Enter task name"/>
             </div>

             <div className="content-btnLogin" style={right}>
                 <Box sx={{ display: 'flex', alignItems: 'center'}} >
                     {withUser && <Avatar
                         sx={{ width: 60, height: 60 }}
                         src={withUser.avatar}
                     /> }
                     {withUser &&
                         <Typography 
                             variant="span"
                             fontSize={"21px"}
                             style={styleNameUser}
                         >
                             {withUser.first_name} 
                         </Typography>
                     }
                     <ExpandMore
                         onClick={handleOpen}
                         aria-expanded={openMenu ? "true" : undefined}
                     />
                     <Menu
                         open={openMenu}
                         onClose={handleClose}
                         anchorEl={anchorEl}
                     >
                         { withUser && <MenuItem>{withUser ? withUser.email : null}</MenuItem>}
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
} 

const navbarStyles ={
    display:'flex',
    flexDirection: 'row',
    height: '11%',
    justifyContent: 'space-between',
    padding: '0 50px',
    boxShadow: '3px 2px 3px rgb(0,0,0,0.1)',
    borderBottom: 'solid 2px #dbdbdb'
}
    const container = {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center'
    }
    const left = {
        justifyContent: 'center',
        marginLeft: '8%',
        margingRigth: '10%',
    }
    const middle = {
        width: '40%'
    }

    const right = {
        marginRight: '7%',
        cursor: "pointer"
    }

    const inputSearch = {
        fontSize: '20px',
        padding: '10px',
        width: '100%',
        borderRadius: 7,
        border: 'solid 1.4px #dbdbdb'
    }

    const styleNameUser = {
        paddingLeft: "15px",
    }   