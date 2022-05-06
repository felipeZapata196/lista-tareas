import React from "react";



export const Button= ({...rest})=>{
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
   
    const divButton = {
        margin: '20px 40px',
        width:'50%'
    }


    return(
      
  
        <div style={divButton}> 

        <button  style={buttonStyle}
                {...rest}
                        >
                            + new Task
        </button>
        </div>
      
    )
}