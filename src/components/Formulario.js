
import React, { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import {Button} from './Button'
import {InputDate} from './InputDate'
import './Formulario.css'
import {getTask}  from './../services/TaskService'
import { postForm } from "../hooks/postForm";
import moment from 'moment'

export const Formulario = ({submit, nameFilter})=>{


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const email =  JSON.stringify(localStorage.getItem("email"))
  const data =  JSON.parse(localStorage.getItem(email))


  const [value, setValue] = React.useState({
    id: 0,
    name: '',
    description: '',
    completed: false,
    date:'May 26, 2022'
  });

  const handleChange = (event) => {
    setValue({
      ...value, 
      [event.target.name]: event.target.value,
      id: data[data.length -1].id +1
    });
  };

const handleDate =(date)=> {
  
  const d = new Date(date)
  const dateFormated = moment(d).format('ll')
  const t = moment().startOf(dateFormated).fromNow(); 
  console.log(t, 'hola')
 
  
  setValue({
    ...value,
    date: dateFormated
  })
} 

  const HandleSubmit = (e) =>{
    e.preventDefault()
    postForm(value.id, value.name, value.description,value.completed, value.date)
    submit(value)
    handleClose()
   
  
  }

    React.useEffect(()=>{
      getTask()
  }, [])
  

  React.useEffect(()=>{
    getTask() 
  }, [])

 
    return(
      <div style={funcionalitiesStyle}>

          <div style={titleStlye}>
            <h1 >{nameFilter}</h1>    
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
                            handleDate={handleDate}
                            value={value.date}

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
    width: 530,
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
