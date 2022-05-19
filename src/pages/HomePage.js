import React, {useState} from "react"
import moment from 'moment'
import { Avatar, Menu, MenuItem, Typography, Box, ListItemIcon } from "@mui/material";
import { doLogout } from "../services/user.service";
import { loginStore } from '../store/loginStore';
import { Logout, ExpandMore } from "@mui/icons-material";
import {Task} from '../components/Task'
import { getTask } from "../services/TaskService";
import  useStore from '../store/useStore'
import '../App.css';
import SideBar from '../components/Sidebar';
import {Formulario} from '../components/Formulario'
import swal from 'sweetalert';




const HomePage = ()=> {

  
  const today = moment().format('ll');
  const [anchorEl, setAnchorEl] = useState(null)
  const [ withUser, setWithUser ] = useState(null)
  const [open, setOpen] = useState(false)
  const [task, setTask] = useState([])
  const [ edit, setEdit ] = useState(false)
  const [search, setSearch]= useState('')
  const [allTasks, setAllTasks] =useState([])
  const items = useStore(state => state.items)
  const setLogin = loginStore(state => state.setLogin)
  const openMenu = Boolean(anchorEl)

    /*NavBarFuncionalities*/
  
    const handleChange = (e)=>{
        setSearch(e.target.value)
        filter(e.target.value)

    }
    const filter =  (itemSearch)=>{
       var results = allTasks.filter( (item)=>{
           if(item.name.toLowerCase().includes(itemSearch.toLowerCase())
           ){
               return item
           }

       });
      setTask(results)
    }
 
    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const getUser = async () => {
        if (localStorage.getItem("user")) {
            const user = await JSON.parse(localStorage.getItem("user"));
            await setWithUser(user);
        }
    }
    
     /*NavBarFuncionalities*/

     /*TasksFuncionalities*/
    const submit = (data) => {

        setTask([
          ...task,
          data,
        ])
       
      }

      const getAllTasks =  () => {
        const email = JSON.stringify(localStorage.getItem("email"))
        const data =  JSON.parse(localStorage.getItem(email))
        console.log(data)
        setTask(data)
        setAllTasks(data)
    }
    /*TasksFuncionalities*/
  

     /*DelteTaks*/
    const showDelete = (id) => {
        setEdit(false)
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
                const email = JSON.stringify(localStorage.getItem("email"))
                const dataLocalStorage =  JSON.parse(localStorage.getItem(email))
                const data =(dataLocalStorage.filter((task)=> task.id !==id))
                localStorage.setItem(email, JSON.stringify(data))
                setTask(data)
                
                
            }
        });
    }
     /*DelteTaks*/
    React.useEffect(()=>{
        getUser();
        getTask()
        getAllTasks()
  
    }, [])
    React.useEffect(()=>{
    
        getAllTasks()
  
    }, [items])
  
  

    return (
        <div className="general-containter">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="mainContainer">
              
            <nav style={navbarStyles}>
                   <div className="top-container" style={container}>
                       <div style={left}>
                           <p>{today}</p>
                       </div>
                        <div className="content-input" style={middle}>

                           <input className="ipSearch" style={inputSearch}  name="search" value={search}  onChange={handleChange} type="text"  required placeholder="Enter task name"/>
                           <button className='btnSearch' style={buttonSearch}  >Search</button>

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
                                        {withUser.first_name} {withUser.last_name}
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

        <div style={layout}>

                    <Formulario submit={submit}/>
         
                    <div style={tasks} >
                        { task.map((task) =>
                            <Task 
                            id={task.id}
                            name={task.name} 
                            description={task.description} 
                            showDelete={showDelete}/>
                        
                        )}

                    </div>

        </div>
            </div>
        </div>
    )
}

 /* meter todos estos estilos en app.css !!!!*/

const layout = {
        
    minHeight: '100%',
    width: '100%',
    backgroundColor:'#e5e4e2',

}

 
 const tasks = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%'
}

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


    

export default HomePage