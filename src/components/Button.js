import { height } from "@mui/system";
import React, { Children } from "react";



export const Button= ({...rest}, {Children})=>{
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
   
    const divButton = {
   
    width: '50vw',
    margin: '30 120px',
    paddingTop:'30px'


    }


    return(
      
  
        <div style={divButton}> 

        <button  style={buttonStyle}
                {...rest}
                        >
                        Add
        </button>

        </div>
      
    )
}