
import React, { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import {Button} from './Button'
import {InputDate} from './InputDate'
import './Formulario.css'
import {getTask}  from './../services/TaskService'
import { postForm } from "../hooks/postForm";
import useStore from '../store/useStore'


export const Formulario = ({submit})=>{


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const items = useStore(state => state.items)
  const increaseItems =useStore(state=> state.increaseItems)
  const email =  JSON.stringify(localStorage.getItem("email"))
  const data =  JSON.parse(localStorage.getItem(email))


  const [value, setValue] = React.useState({
    name: '',
    description: '',
    completed: false
  });

  const handleChange = (event) => {
    setValue({
      ...value, 
      [event.target.name]: event.target.value
    });
  };


 

  const HandleSubmit = (e) =>{
    e.preventDefault()
    let id= data.length -1
    id++
    postForm(id, value.name, value.description,value.completed)
    submit(value)
    handleClose()
   
  
  }

    React.useEffect(()=>{
      getTask()
  }, [])
  

  React.useEffect(()=>{
    getTask() 
  }, [items])

 
    return(
      <div style={funcionalitiesStyle}>

          <div style={titleStlye}>
            <h1 >Recent task</h1>    
          </div>

          <div style={buttonStyles}>
                <Button onClick={handleOpen}> + Add Task</Button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                  <Box sx={modalStyle}>
                
                  <h1 style={{textAlign:'center', paddingBottom: 30}}>Add yours tasks</h1>

                 
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Name"
                          name="name" 
                          fullWidth
                          margin="normal"
                          multiline
                          maxRows={4}
                          value={value.name}
                          onChange={handleChange}
                        />
                     
                          <TextField
                            id="outlined-multiline-static"
                            fullWidth
                            label="Description"
                            name="description" 
                            onChange={handleChange}
                            margin="normal"
                            multiline
                            rows={2}
                          />

                        <InputDate
                            handleChange={handleChange}

                          />
                          
                        <div>

                        </div>
                          <div style={{paddingTop:60}}>
             
                          <Button  onClick={HandleSubmit} >Save </Button>
                          
                      
                          
                          </div>
             
                    <div>
                
                    </div>
            
                  </Box>
                </Modal>
          </div>
              

  </div>
    
    )
}
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 480,
    bgcolor: 'background.paper',
    border: '0,5px solid #000',
    boxShadow: 24,
    borderRadius: '3px',
    p: 4,
};
const buttonStyles ={
   
  width: '50vw',
  margin: '30 50px',
  paddingTop:'30px',
  paddingRight:'60px'

}

const funcionalitiesStyle = {
  width: '100%',
  height: '10%',
  display: 'flex',
  flexDirection: 'row',
  paddingTop:'20px'
  
}

const titleStlye = {
 margin: '20px 40px',
 width:'50%'
}

const buttonStyle = {

float: 'rigth'
}
