import React from "react";

export const NavBar = ()=>{
    const navbarStyles ={
        display:'flex',
        flexDirection: 'row',
        height: '11%',
        justifyContent: 'space-between',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)',
    }

    const container = {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center'
    }

    const left = {
        flex: 1,
        justifyContent: 'center',
        float: 'left',
        paddingLeft: '13%'
    }

    const middle = {
        flex: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        left: '17%',
        float: 'left'
    }

    const right = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        float: 'right'
    }

    const inputSearch = {
        fontSize: '20px',
        padding: '10px',
    }

    const buttonSearch = {
        fontSize: '20px',
        padding: '12px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none'
    }

    const buttonLogin = {
        fontSize: '20px',
        padding: '12px',
        backgroundColor: 'gray',
        color: 'black',
        border: 'none'
    }

    const date = '5 May 2022'

    return(
        <nav style={navbarStyles}>
           <div className="top-container" style={container}>
               <div style={left}>
                   <p>{date}</p>
               </div>
                <div className="content-input" style={middle}>
                    <input className="ipSearch" style={inputSearch} type="text" required placeholder="Enter task name"/>
                    <button className='btnSearch' style={buttonSearch} type="submit" onClick={() => console.log("Boton de search")}>Search</button>
                </div>
                <div className="content-btnLogin" style={right}>
                    <button className='btnLogin' style={buttonLogin} type="submit">Login</button>
                </div>
            </div>
        </nav>  
    )

    // Para buscar por nombre usaremos filter y buscaremos en el estado de la lista de tasks.
}