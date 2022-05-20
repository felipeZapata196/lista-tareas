
import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import {Button} from './Button'
import {InputDate} from './InputDate'
import './Formulario.css'



export const EditTask= (props) => {
  
  const [value, setValue] = React.useState({
    name: '',
    description: ''
      })

  const handleChange = (event)=>{
    setValue({
      ...value, 
      [event.target.name]: event.target.value
   
    })


}
  const HandleSubmit = (e) =>{
    e.preventDefault()
  
    props.editTasks(props.id, value.name, value.description)
    props.handleClose()

  }

  return(
   

        <div style={buttonStyles}>
              <Button onClick={props.handleOpen}> Edit Task</Button>
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

                      <InputDate/>
                        
                      <div>

                      </div>
                        <div style={{paddingTop:10}}>
           
                        <Button onClick={HandleSubmit}>Save </Button>
                       
                          
                        
                       
                        </div>
                  
                  <div>
              
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
