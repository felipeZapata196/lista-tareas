import React, {useEffect, useState} from "react"
import {Task} from '../components/Task'
import { getTask } from "../services/TaskService";
import  useStore from '../store/useStore'
import '../App.css';
import SideBar from '../components/Sidebar';
import {Formulario} from '../components/Formulario'
import {NavBar} from '../components/NavBar'

const HomePage = ()=> {

    const [task, setTask] = useState([])
    const [allTasks, setAllTasks] =useState([])
    const [ nameFilter, setNameFilter ] = useState('Recent tasks')
    const [change, setChange] = useState(false)

    const items = useStore(state => state.items)

    /*useEfects*/
    useEffect(()=>{
        getAllTasks();
    }, [items])

    useEffect(() => {
        getAllTasks();
    }, [change])

     /*TasksFuncionalities*/
    const submit = async (data) => {

        await setTask([
          ...task,
          data,
        ])
        await setAllTasks([
            ...allTasks,
            data,
        ])
    }

    const getAllTasks = () => {
        return new Promise((resolve, reject) => {
            getTask().then(async res => {
                await setTask(res)
                await setAllTasks(res)
                resolve();
            }).catch(err => {
                console.log('Error en el getTask ', err);
                reject();
            })
        }) 
    }

    /*dinamic title*/
    const stateFilter = (filter) => {
        setNameFilter(filter)
    }

    return (
        <div className="general-containter">
            <div className="sidebar">
                <SideBar 
                getAllTasks={getAllTasks}
                nameFilter={stateFilter}
                change={change}
                setTasks={(value) => setTask(value)}
                />
            </div>
            <div className="mainContainer">
                <NavBar
                    setTasks={(value) => setTask(value)}
                />
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
                            completed={task.completed}
                            change={change}
                            setChange={(value) => setChange(value)}
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