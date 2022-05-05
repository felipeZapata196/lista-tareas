import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
}

const axiosInstance = axios.create({baseURL: 'https://reqres.in/',  responseType: 'json'});

/**
 * Iniciar sesion
 * */
 export const login = (email, pass) => {
    return new Promise((resolve, reject) => {
      axiosInstance.post('api/login', {email: email, password: pass}).then(res => {
        localStorage.setItem('token', res.headers.authorization);
        console.log(res)
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
  
  /**
   * Cerrar sesion
   * */
//   export const logout = () => {
//     return new Promise((resolve, reject) => {
//       axiosInstance.get('logout.json', {headers}).then(res => {
//         resolve(res);
//       }).catch(err => {
//         reject(err);
//       })
//     })
//   }