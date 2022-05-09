// Usaremos esta función al cargar la página
/**
 * Función para saber si hay un usuario logueado
 * @returns true -> si encuentra un token | false -> si no encuentra nada
 */
export const isLogged = () => {
    return new Promise((resolve, reject) => {
      JSON.parse(localStorage.getItem('token'))
        .then(value => {
          if (value !== null) resolve(value);
          else reject(false);
        })
        .catch(err => {
          reject(err);
        });
    });
  };