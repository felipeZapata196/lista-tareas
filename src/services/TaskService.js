
import axios from "axios";

export const postTask = async(id, name, description, completed) => {
    return new Promise((resolve,reject)=>{
        axios({
            method: 'POST',
            url: 'https://my-json-server.typicode.com/felipeZapata196/lista-tareas/tasks',
            data: {
                id,
                name,
                description,
                completed
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
                console.log("Que tiene response data ", response.data)
                // localStorage.setItem(email, JSON.stringify(response.data))
                resolve(response.data);
            })
            .catch((err) =>{
                reject(err)
            });
        }
    })

}
