// Usaremos esta función al cargar la página
/**
 * Función para saber si hay un usuario logueado
 * @returns true -> si encuentra un token | false -> si no encuentra nada
 */

export const isLogged = () => {
  // console.log("Como va la cosa", localStorage.getItem('token'))
    return new Promise((resolve, reject) => {
      if (localStorage.getItem('token')) resolve(true);
      else reject(false);
    })     
};

