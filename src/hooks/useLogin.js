import { useState } from "react"
import { useNavigate } from "react-router-dom";


// Simulacion de una base de datos. Aqui se guardan todos los usuarios y contraseñas.
const baseDeDatos = [
  {usuario:"admin", contrasenia:"admin"},
  {usuario:"user", contrasenia:"user"},
]

// Esta funcion es la encargada de validar los datos que ingresen si es que
// hay ya un usuario registrado.
export const useLogin = () => {

  // Aqui se guardaran el usuario y la contraseña que ingrese en los inputs.
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');

  // Dos funciones que guardan el valor de los inputs que se ingresaron.
  const onUserChange = ( { target } ) => {
    setUser( target.value );
  };

  const onPasswordChange = ( { target } ) => {
    setPassword( target.value );
  };

  // Funcion para borrar los datos que queden guardados en user y password.
  const resetCampos = () => {
    setUser('');
    setPassword('');
  }

  // Hook para poder enviar al intranet.
  const navigate = useNavigate();

  // Funcion que valida si es que los datos que han sido ingresados son
  // correctos y nos redigirá hacia el intranet.
  const onLogear = () => {
    // Recorremos el array con los "usuarios registrados" y si el usuario
    // && contraseña coinciden, la variable cambiara a true.
    let VALIDACION = false;
    baseDeDatos.forEach( ({usuario, contrasenia}) => {
      if((usuario === user && contrasenia === password  )) VALIDACION = true;
    })
    // Si la varible "VALIDACION" es distinta de true, nos arrojara un
    // error en nuestro HTML.
    if (VALIDACION !== true) return mensajeError();
    resetCampos();
    // Si la condicion anterior no se cumple podremos ingresar al intranet.
    return navigate('/intranet');
  }

  // Esta funcion agregara un texto como mensaje de error, esta se agregara
  // a los dos div que tenemos en el HTML.
  const mensajeError = () =>{
    const TEXTO_ERROR = "El usuario o contraseña es incorrecta..";
    let errorUser = document.getElementById("errorUsuario");
    let errorPass = document.getElementById("errorContrasenia");
    return errorUser.innerText = TEXTO_ERROR, errorPass.innerText = TEXTO_ERROR;
}

  // Retornamos ciertas cosas para que puedan usarse donde queramos.
  return {
    user,
    password,
    onUserChange,
    onPasswordChange,
    onLogear,
  }

}
