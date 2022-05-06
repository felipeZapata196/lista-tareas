
import axios from "axios";




export const postTask = async(name, description) => {
    return new Promise((resolve,reject)=>{
        axios({
            method: 'POST',
            url: 'https://my-json-server.typicode.com/felipeZapata196/lista-tareas/tasks',
            data: {
                name,
                description
            }
           
        })
        .then((response)=> {

            resolve(response.data)

               

            
        })
        .catch((err) =>{
            reject(err)
        });
    
    })
   
}


export const getTask =async() => {
    return new Promise((resolve,reject)=>{
        if(localStorage.getItem("nuevo")){
            resolve(JSON.parse(localStorage.getItem("nuevo")))  // 
        }else{
            axios({
                method: 'GET',
                url: 'https://my-json-server.typicode.com/felipeZapata196/lista-tareas/tasks',
               
            })
            .then((response)=> {
                localStorage.setItem("nuevo", JSON.stringify(response.data))
                resolve(response.data);
            })
            .catch((err) =>{
                reject(err)
            });
        }
       
    
    })

}