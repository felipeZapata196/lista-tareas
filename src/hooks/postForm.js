import { postTask } from "../services/TaskService";

const email =  JSON.stringify(localStorage.getItem("email"))


export const postForm = (id, name, description, date)=>{
  postTask(id, name, description, date).then(res =>{

    console.log("Algo sale ", res)
    let storageData = []
  storageData = JSON.parse(localStorage.getItem(email))

  storageData.push(res)
  localStorage.setItem(email, JSON.stringify(storageData) )
   
})
.catch( err => {
    console.error(err)
})
}