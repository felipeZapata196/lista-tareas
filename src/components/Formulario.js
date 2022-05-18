import * as React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import {Button} from './Button'
import {InputDate} from './InputDate'
import './Formulario.css'
import {getTask}  from './../services/TaskService'
import { postForm } from "../hooks/postForm";
import useStore from '../store/useStore'
import { set } from "date-fns";
import { useState, useEffect } from 'react';

export const Formulario = ()=>{
  
  const increasePopulation = useStore(state => state.increasePopulation)
  const bears = useStore(state => state.bears)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const email =  JSON.stringify(localStorage.getItem("email"))
 const [ lista, setLista ] = useState([])

  useEffect(() => {
    console.log("Lista ", lista)
    setLista(JSON.parse(localStorage.getItem(email)))
  }, [])

  const [value, setValue] = React.useState({

    name: '',
    description: '',
    date: ''
  });





    const handleChange = (event) => {
     
      setValue({
        ...value, 
        [event.target.name]: event.target.value

      } );
    };
    const submit = e =>{
      e.preventDefault()

      let nuevoId = lista[lista.length -1].id +1

      if (lista.length === 0){
        localStorage.removeItem(email)
      }

      postForm(nuevoId, value.name, value.description)

      console.log("Valor de id ", nuevoId)
  }

    React.useEffect(()=>{
      getTask()

  }, [bears])

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

                  <form onSubmit={submit}>
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

                        <InputDate/>

                        <div>

                        </div>
                          <div style={{paddingTop:60}}>

                          <Button  onClick={increasePopulation} >Save </Button>
                          <Button onClick={handleClose}>Close</Button>

                          </div>
                      </form>
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
    height: 580,
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
