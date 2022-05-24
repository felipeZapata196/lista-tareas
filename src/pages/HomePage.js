import React, {useState} from "react"

import {Task} from '../components/Task'
import { getTask } from "../services/TaskService";
import  useStore from '../store/useStore'
import '../App.css';
import SideBar from '../components/Sidebar';
import {Formulario} from '../components/Formulario'
import {NavBar} from '../components/NavBar'
import swal from 'sweetalert';



const HomePage = ()=> {

    const [task, setTask] = useState([])
    const [ edit, setEdit ] = useState(false)
    const [allTasks, setAllTasks] =useState([])
    const items = useStore(state => state.items)
    const email = JSON.stringify(localStorage.getItem("email"))
  

    /*useEfects*/
    React.useEffect(()=>{
        getTask()
        getAllTasks()
    }, [])
    React.useEffect(()=>{
        getAllTasks()
    }, [items])



    /*NavBarFuncionalities*/

    const filter =  (itemSearch)=>{
       var results = allTasks.filter( (item)=>{
           if(item.name.toLowerCase().includes(itemSearch.toLowerCase())
           
           ){
                return item
           
             }});
      setTask(results)
    }

     /*TasksFuncionalities*/
    const submit = (data) => {

        setTask([
          ...task,
          data,
        ])
       
      }
      const getAllTasks = async () => {
        await getTask().then(async res => {
            localStorage.setItem(email, JSON.stringify(res))
            setTask(res)
            setAllTasks(res)
            
          }).catch(err => {
            console.log('Error en el getTask ', err);
            
          })
    }
     
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
   
     /*ChageState*/
     const changeState = (id) => {
        let updateTasks = allTasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed
                return task
            } else {
                return task
            }
        })
            
        localStorage.setItem(email, JSON.stringify(updateTasks))
        console.log(updateTasks)
        console.log('se borra ahora')
        setAllTasks(updateTasks)
    }
        
      /*EditTasks*/
    const editTasks= (id, name, description, date) => {
       let edited= task.map(task => {
            if (task.id === id) {
                task.name = name
                task.description = description
                task.date = date
                return task
            } else{
               return task
            }})
        localStorage.setItem(email, JSON.stringify(edited))
        setTask(edited)
    
    }

     /*FitlerTask*/
     const filterBy =  (itemSearch)=>{
        var results = allTasks.filter( (item)=>{
            if(item.completed === itemSearch){
                 return item
              }
            });
       setTask(results)
      
     }
  
  
    return (
        <div className="general-containter">
            <div className="sidebar">
                <SideBar 
                filterBy={filterBy}/>
            </div>
            <div className="mainContainer">
                <NavBar
                filter={filter}/>
                <div style={layout}>
                            <Formulario submit={submit}/>
                            <div style={tasks} >
                                { task.map((task) =>
                                    <Task 
                                    id={task.id}
                                    name={task.name} 
                                    description={task.description} 
                                    date = {task.date}
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

const layout = {
        
    minHeight: '100%',
    width: '100%',
    backgroundColor:'#e5e4e2',

}

 const tasks = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%'
}


export default HomePage