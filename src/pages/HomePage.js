import React, {useEffect, useState} from "react"

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
    const [allTasks, setAllTasks] =useState([])
    const items = useStore(state => state.items)
    const email = JSON.stringify(localStorage.getItem("email"))
    const [ nameFilter, setNameFilter ] = useState('Recent tasks')
    const [recents, setRecents ] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [completed, setCompleted] = useState([])
    const [change, setChange] = useState(false)



    /*useEfects*/
    React.useEffect(()=>{
        getAllTasks();
    }, []);
    React.useEffect(()=>{
        getAllTasks();
    }, [items])

    useEffect(()=>{
        listAll();
    }, [allTasks]);

    useEffect(() => {
        listAll()
    }, [change])

    /*dinamic title*/
    const stateFilter = (filter) => {
        setNameFilter(filter)
    }

    /*NavBarFuncionalities*/

    const filter = (itemSearch)=>{
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
        setAllTasks([
            ...allTasks,
            data,
          ])
        setChange(!change)
    }

    const getAllTasks = () => {
        return new Promise((resolve, reject) => {
            getTask().then(async res => {
                await localStorage.setItem(email, JSON.stringify(res))
                await setTask(res)
                await setAllTasks(res)
                resolve();
            }).catch(err => {
                console.log('Error en el getTask ', err);
                reject();
            })
        })
    }
     /*Sidebar funcionalities*/
     const listAll = async () => {
        await setRecents(allTasks)
        await setInProgress(allTasks.filter(task => task.completed !== true))
        await setCompleted(allTasks.filter(task => task.completed === true))
    }

     /*DelteTaks*/
    const showDelete = (id) => {
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
                console.log("Que tiene data ", data)
                localStorage.setItem(email, JSON.stringify(data))
                setTask(data)
                setAllTasks(data)
            }
            setChange(!change)
        });
    }
   
     /*ChageState*/
     const changeState = async (id) => {
        let updateTasks = await allTasks.map(task => {
           
            if (task.id === id) {
                task.completed = !task.completed
                return task
            } else {
                return task
            }
        })
        setTask(updateTasks)    
        localStorage.setItem(email, JSON.stringify(updateTasks))
        setChange(!change)
    }
        
      /*EditTasks*/
    const editTasks= (id, name, description, date) => {
       let edited= allTasks.map(task => {
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
                filterBy={filterBy}
                getAllTasks={getAllTasks}
                nameFilter={stateFilter}
                recents={recents.length}
                inProgress={inProgress.length}
                completed={completed.length}
                />
            </div>
            <div className="mainContainer">
                <NavBar
                filter={filter}/>
                <div style={layout}>
                                    <Formulario 
                                    submit={submit}
                                    nameFilter={nameFilter}
                                            />
                            <div style={tasks} >
                                {task.slice(0).reverse().map((task)=>
                                    <Task 
                                    key={task.id}
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