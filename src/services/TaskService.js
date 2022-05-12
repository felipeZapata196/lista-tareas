
import axios from "axios";




export const postTask = async(name, description, date) => {
    return new Promise((resolve,reject)=>{
        axios({
            method: 'POST',
            url: 'https://my-json-server.typicode.com/felipeZapata196/lista-tareas/tasks',
            data: {
                name,
                description, 
                date
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
        
        const email = JSON.stringify(localStorage.getItem("email"))
       
        if(localStorage.getItem(email)){
            resolve(JSON.parse(localStorage.getItem(email)))  
        }else{
            axios({
                method: 'GET',
                url: 'https://my-json-server.typicode.com/felipeZapata196/lista-tareas/tasks',
               
            })
            .then((response)=> {
                localStorage.setItem(email, JSON.stringify(response.data))
                resolve(response.data);
            })
            .catch((err) =>{
                reject(err)
            });
        }
       
    
    })

}