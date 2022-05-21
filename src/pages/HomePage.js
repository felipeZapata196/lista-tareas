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
  const email = JSON.stringify(localStorage.getItem("email"))
  

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
      const getAllTasks = async () => {
        await getTask().then(async res => {
            console.log("getTask devuelve: ", res)
            localStorage.setItem(email, JSON.stringify(res))
            setTask(res)
            setAllTasks(res)
          }).catch(err => {
            console.log('Error en el getTask ', err);
          })
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
                const dataLocalStorage =JSON.parse(localStorage.getItem(email))
                const data =(dataLocalStorage.filter((task)=> task.id !==id))
                localStorage.setItem(email, JSON.stringify(data))
                setTask(data)
            }
        });
    }
     /*DelteTaks*/

     /*ChageState*/
     const changeState = (id) => {
        let updateTasks = task.map(task => {
            if (task.id === id) {
                task.completed = !task.completed
                return task
            } else {
                return task
            }
        })
            
        localStorage.setItem(email, JSON.stringify(updateTasks))
    }
      /*ChageState*/
        
      /*EditTasks*/
    const editTasks= (id, name, description) => {
       let edited= task.map(task => {
            if (task.id === id) {
              
                task.name = name
                task.description = description
                return task
              
            } else{
               return task
            }
        })
        localStorage.setItem(email, JSON.stringify(edited))
        setTask(edited)
    
    }
     /*EditTasks*/
    
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

        <div style={layout}>

                    <Formulario submit={submit}/>
         
                    <div style={tasks} >
                        { task.map((task) =>
                            <Task 
                            id={task.id}
                            name={task.name} 
                            description={task.description} 
                            showDelete={showDelete}
                            changeState={changeState}
                            completed={task.completed}
                            editTasks={editTasks}
                            />
                            
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
    boxShadow: '3px 2px 3px rgb(0,0,0,0.1)',
    borderBottom: 'solid 2px #dbdbdb'
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
        paddingLeft: '8%',
        paddingRigth: '10%',
        
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
        marginLeft: '7%',
        cursor: "pointer"
    }

    const inputSearch = {
        fontSize: '20px',
        padding: '10px',
        width: '50%',
        borderRadius: 7,
        border: 'solid 1.4px #dbdbdb'
    }

  

    const styleNameUser = {
        paddingLeft: "15px",
    }


    

export default HomePage