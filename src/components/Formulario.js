import React, {useEffect} from "react";
import {Task} from './Task'
import './Formulario.css'


import {postTask, getTask}  from './../services/TaskService'


export const Formulario = ()=>{
    useEffect(()=>{
        getTask()
    }, [])

  
    const handleChange= ()=>{
      const name= "comprar leche";
      const description = "ir a comprar leche"

      
      postTask(name, description).then(res =>{
          console.log(res)
          let storageData = []
        storageData = JSON.parse(localStorage.getItem("nuevo"))
      
        storageData.push(res)
       localStorage.setItem("nuevo", JSON.stringify(storageData) )
      })
      .catch( err => {
          console.error(err)
      })

     

    }
    

  
    return(
  
            <div style={cardFormulario}>
            
            <form style={{padding:80}}>
               <div className="field">
                   <label> Name</label>
                    <input></input>
                </div> 
                <div className="field">
                   <label>Date</label>
                    <input></input>
                </div> 
                <div className="field">
                   <label>Description</label>
                    <input></input>
                </div> 
                <button type="button" onClick={handleChange}>Enviar</button>
           

            </form>


            </div>
       
            

    

             
    )
}

const cardFormulario = {
    borderRadius: '4px',
    backgroundColor: '#fff',
  
}
