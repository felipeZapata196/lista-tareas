
import * as React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import {Button} from './Button'
import {InputDate} from './InputDate'
import './Formulario.css'
import {getTask}  from './../services/TaskService'
import { postForm } from "../hooks/postForm";



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
      description: '',
      date: ''

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
       postForm(value.name, value.description)
   

  
    }
    

  
    return(
  
            <div style={buttonStyles}>
            <Button onClick={handleOpen}> + Add Task</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
              <Box sx={modalStyle}>
              <form style={{padding:30}} onSubmit={submit}>
          
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

                <InputDate/>
                  
                <div>


                  
                </div>
                  <div style={{paddingTop:60}}>
                
                 
                  <Button  >Save </Button>
                  <Button onClick={handleClose}>Close</Button>



                  </div>
                
                <div>
              

                </div>
           

            </form>
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