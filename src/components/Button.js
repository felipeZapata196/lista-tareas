
import React from "react";



export const Button= ({children, ...rest} )=>{
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
        fontSize: '1rem',
      

    }


    return(
      
  
       

        <button  style={buttonStyle}
                {...rest}>
                       {children}
        </button>

      
    )
}