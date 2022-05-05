import axios from 'axios';

// TOKEN
const TOKEN_KEY = 'token'

const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
}

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
}

const deleteToken = () => {
  localStorage.removeItem(TOKEN_KEY);
}

const initAxiosInterceptors = () => {
  axios.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = token
    }
    return config
  });

  axios.interceptors.response.use((res) => {
    return res
  }, (err) => {
    return err
  })
}

const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
}

const axiosInstance = axios.create({baseURL: 'https://reqres.in/',  responseType: 'json'});

/**
 * Iniciar sesion
 * */
 export const login = (email, pass) => {
  const data = {
    email: email,
    password: pass
  }

    return new Promise((resolve, reject) => {
      axios.post('https://reqres.in/api/api/login', data).then(res => {
        localStorage.setItem('token', res.token);
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }

// export async function loginn(email, password) {
//   const { data } = await axios.post('https://reqres.in/api/login', {email: email, password: password});
//   localStorage.setItem('token', data.token)
// }

// export const logine = async (email, pass) => {
//   const dates = {
//     email: email,
//     password: pass,
//   }

//   const res = await fetch('https://reqres.in/api/login', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(dates)
//   })

//   const data = await res.json()

//   console.log(data)

//   localStorage.setItem('token', data)
//   }
  
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