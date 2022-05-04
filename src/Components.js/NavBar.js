import React from "react";


export const NavBar = ()=>{
    const navbarStyles ={
        display:'flex',
        flexDirection: 'row',
        height: '80px',
        justifyContent: 'space-between',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'


    }
    return(
        <nav style={navbarStyles}>
            <div> 
                <p> hola mundo</p>
            </div>
        </nav>  
    )
}