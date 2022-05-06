import axios from 'axios';

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
        localStorage.setItem('token', res.data.token);
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
  export const logout = () => {
    return new Promise((resolve, reject) => {
      axiosInstance.get('logout.json', {headers}).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }

  // Para cambiar de usuario:
  // Primero limpiar local storage
  // Poner el setLogin a false
  

  // Nueva tarea 