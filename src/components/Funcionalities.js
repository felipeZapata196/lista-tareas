import React from "react";



export const Funcionalities= ()=>{
    const funcionalitiesStyle = {
        width: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row'
        
       

    }
    const  buttonStyle = {
        backgroundColor: '#f44336',
        color: 'white',
        padding: '15px 35px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        float: 'right',
        height: '3rem',
        margin: '5px 10px',
        fontSize: '1rem'

    }
   const titleStlye = {
       margin: '20px 40px',
       width:'50%'
   }

   const divButton = {
    margin: '20px 40px',
    width:'50%'
}
    return(
      
        <div style={funcionalitiesStyle}>

            <div style={titleStlye}>
            <h1 >Recent task</h1>    
            </div>

            <div style={divButton}> 

            <button  style={buttonStyle}> + new Task</button>
            </div>
            
            
           
            

            
          
        </div>

  
       
      
    )
}
