import axios from 'axios';
import { loginStore } from '../store/loginStore';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
}

const axiosInstance = axios.create({baseURL: 'https://reqres.in/', responseType: 'json'});

/**
 * Iniciar sesion
 * */
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
  
  // Tengo que decirle que saque los datos de la página 1, luego de la 2, luego 3, hasta que no encuentre nada
  // necesito una variable incremental que vaya subiendo hasta que encuentre una página que no tenga nada.
  export const getUsers = (page) => {
    return new Promise((resolve, reject) => {
      console.log("Página que llega a la función ", page)
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

  /**
   * Cerrar sesion
   * */
  // Necesito una función que borre el token y que ponga el login del store a false
  // Igual estaría bien traer la lista de usuarios
  export const doLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  // Para cambiar de usuario:
  // Primero limpiar local storage
  // Poner el setLogin a false
  
  // Necesito un "dropdown" en el navbar para que despliegue un boton que ponga "cerrar sesion o cambiar de usuario"
  // Cuando le de a lo de Felipe Marcos

  // Nueva tarea 


