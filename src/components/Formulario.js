
import * as React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import useFormulario from './../hooks/useFormulario'
import {Task} from './Task'
import './Formulario.css'

import {postTask, getTask}  from './../services/TaskService'


export const Formulario = ()=>{


    
    React.useEffect(()=>{
        getTask()
    }, [])

  

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

   

    const [tasks, setTasks] = React.useState([])

    const [value, setValue] = React.useState({
      name: '',
      description: ''
    });

    const handleChange = (event) => {
     
      setValue({
        ...value, 
        [event.target.name]: event.target.value

      } );
      console.log(value)
      
    };
    const submit = e =>{
      e.preventDefault()
      setTasks([
      ...tasks,
      value
      ])
          postTask(value.name, value.description).then(res =>{
            console.log(res)
            let storageData = []
          storageData = JSON.parse(localStorage.getItem("nuevo"))
        
          storageData.push(res)
        localStorage.setItem("nuevo", JSON.stringify(storageData) )
        })
        .catch( err => {
            console.error(err)
        })
        

  
    }
    

  
    return(
  
            <div style={cardFormulario}>
            
            <Button onClick={handleOpen}> Add Task</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
              <Box sx={modalStyle}>
              <form style={{padding:80}} onSubmit={submit}>
          
               
                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  name="name" 
                  multiline
                  maxRows={4}
                  value={value.name}
                  onChange={handleChange}
                 />
                  
          
                
                  <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    name="description" 
                    onChange={handleChange}
                    
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                  />
                  
                
                <button >Enviar</button>

                <div>
              

                </div>
           

            </form>
              </Box>
            </Modal>
                        
            </div>
       
            

    

             
    )
}

const cardFormulario = {
    borderRadius: '4px',
    backgroundColor: '#fff',
  
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};