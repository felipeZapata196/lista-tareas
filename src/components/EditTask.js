import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import {Button} from './Button'
import {InputDate} from './InputDate'
import './Formulario.css'
import moment from 'moment'

export const EditTask= (props) => {
   
  const [value, setValue] = React.useState({
    name: props.name,
    description: props.description,
    date: props.date
  })

  const handleChange = (event)=>{
    setValue({
      ...value, 
      [event.target.name]: event.target.value
   
    })
  }

const handleDate =(date)=> {
  
  const d = new Date(date)
  const dateFormated = moment(d).format('ll')
  
  setValue({
    ...value,
    date: dateFormated
  })
} 
  const HandleSubmit = (e) =>{
    e.preventDefault()
    props.editTasks(props.id, value.name, value.description, value.date)
    props.handleClose()
  
  }

  return(
    <div>   
      <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <h1 style={{textAlign:'center'}}>Edit your task</h1>
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            name="name" 
            fullWidth
            value={value.name}
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
            value={value.description}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={2}
          />
          <InputDate
            handleDate={handleDate}
            value={value.date}
          />
          <div style={{paddingTop:10}}>
            <Button onClick={HandleSubmit}>Save </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    height: 400,
    bgcolor: 'background.paper',
    border: '0,5px solid #000',
    boxShadow: 24,
    borderRadius: '3px',
    p: 4,
};