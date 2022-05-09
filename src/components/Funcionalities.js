import * as React from "react";
import {Formulario} from './Formulario';




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
 

 
   



    return(
      
        <div style={funcionalitiesStyle}>

            <div style={titleStlye}>
            <h1 >Recent task</h1>    
            </div>
            
            <Formulario/>
                        
           
         

            
          
        </div>

  
       
      
    )
}
