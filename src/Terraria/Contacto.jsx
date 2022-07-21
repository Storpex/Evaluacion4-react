import { useForm } from "../hooks";

export const Contacto = () => {

  const { inputValues, handleInputChange, resetForm, mostrarValues } = useForm({
    nombre: '',
    apellido: '',
    correo: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    resetForm();
  }


  return (
    <section
      className="seccion6 d-flex align-items-center justify-content-center"
    >
      <form onSubmit={handleSubmit} >
        <h4>-------- Contactanos --------</h4>

        <label className="form-label" >Nombre</label>
        <input
          className="form-control"
          type="text"
          placeholder="ej: Jason"
          id="nombre"
          name="nombre"
          value={ inputValues.nombre }
          onChange={ handleInputChange }
        />

        <label className="form-label" >Apellido</label>
        <input
          className="form-control"
          type="text"
          placeholder="ej: Alfaro"
          id="apellido"
          name="apellido"
          value={ inputValues.apellido }
          onChange={ handleInputChange }
        />

        <label className="form-label" >Correo</label>
        <input
          className="form-control"
          type="email"
          placeholder="ej: name@example.com"
          id="correo"
          name="correo"
          value={ inputValues.correo }
          onChange={ handleInputChange }
        />

        <button
          className="btn mt-2"
          type="button"
          value="Enviar"
          onClick={ mostrarValues }
        >
          Enviar
        </button>

      </form>
    </section>
  )
}
