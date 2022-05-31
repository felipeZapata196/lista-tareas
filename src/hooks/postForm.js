import { postTask } from "../services/TaskService";

const email =  JSON.stringify(localStorage.getItem("email"))

export const postForm = async (id, name, description, completed, date)=>{
  await postTask(id, name, description, completed, date).then(res =>{  
  let storageData = []
  storageData = JSON.parse(localStorage.getItem(email))
  storageData.push(res)
  localStorage.setItem(email, JSON.stringify(storageData) )
})
.catch( err => {
    console.error(err)
})
}