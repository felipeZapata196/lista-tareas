import axios from 'axios';
import { loginStore } from '../store/loginStore';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
}
const axiosInstance = axios.create({baseURL: 'https://reqres.in/', responseType: 'json'});

 export const doLogin = (email, pass) => {
    return new Promise((resolve, reject) => {
      axios.post(
        'https://reqres.in/api/login', 
        {
          email: email,
          password: pass
        })
        .then(res => {
        localStorage.setItem('token', JSON.stringify(res.data.token))
        localStorage.setItem('email', email);
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
  
  export const getUsers = (page) => {
    return new Promise((resolve, reject) => {
      axios.get(
        `https://reqres.in/api/users?page=${page}`
      )
      .then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }

  export const doLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

  }

