import axios from "axios";

const email = JSON.stringify(localStorage.getItem("email"))

export const postTask = async(id, name, description, completed, date) => {
    return new Promise((resolve,reject)=>{
        axios({
            method: 'POST',
            url: 'https://my-json-server.typicode.com/felipeZapata196/lista-tareas/tasks',
            data: {
                id,
                name,
                description,
                completed,
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

export const getTask = () => {
    return new Promise(async (resolve,reject)=>{
        
        if(localStorage.getItem(email)){
            await resolve(JSON.parse(localStorage.getItem(email)))
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

export const updateTasks = async (tasks) => {
    localStorage.setItem(email, JSON.stringify(tasks))
}