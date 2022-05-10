import { postTask } from "../services/TaskService";


export const postForm = (name, description)=>{
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