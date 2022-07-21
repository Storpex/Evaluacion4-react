import { useLogin } from '../hooks/useLogin';

export const Login = () => {

  // HOOK PERSONALIZADO QUE USA USESTATE
  const {
    user,
    password,
    onUserChange,
    onPasswordChange,
    onLogear
  } = useLogin()

  return (
    <main className="login-main">
      <section className="login-container">
        <h2>INICIAR SESION</h2>
        <form className="formulario" action="">
          <label className="label-usuario" >Usuario:</label>
          <input
            className="fInput"
            type="text"
            placeholder="ejemplo, usuario@inacapmail.cl"
            id="fUsuario"
            name="user_name"
            value={ user }
            onChange={ onUserChange }
          />

          <div id="errorUsuario"></div>

          <label className="label-contrasenia" >Contraseña:</label>
          <input
            className="fInput"
            type="password"
            placeholder="contraseña"
            id="fContraseña"
            name="user_pass"
            value={ password }
            onChange={ onPasswordChange }
          />

          <div id="errorContrasenia"></div>

          <button
            type="button"
            className="btn"
            onClick={ onLogear }
          >
            Iniciar Sesión
          </button>
        </form>
      </section>
    </main>
  )
}
