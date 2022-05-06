import React from "react";
import { Button } from "./Button";
import Swal from 'sweetalert2'

export const Funcionalities= ()=>{


    const funcionalitiesStyle = {
        width: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row'
        
       

    }

   const titleStlye = {
       margin: '20px 40px',
       width:'50%'
   }

   const handleChange = ()=>{
    const { value: formValues } =Swal.fire({
        title: 'Multiple inputs',
        html:
          '<input id="swal-input1" class="swal2-input">' +
          '<input id="swal-input2" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        }
      })
      
      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }
   }


    return(
      
        <div style={funcionalitiesStyle}>

            <div style={titleStlye}>
            <h1 >Recent task</h1>    
            </div>

            <Button onClick={handleChange}/> 
            
            
           
            

            
          
        </div>

  
       
      
    )
}
