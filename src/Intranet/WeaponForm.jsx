import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../hooks";
import { addWeapon, editWeapon, getWeaponId } from "./js/localStorage";

export const WeaponForm = () => {

  const {id} = useParams();

  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    nombre: '',
    dano: '',
    typeDano: '',
    retroceso: '',
    criticDano: '',
    rareza: '',
  });

  useEffect( () => {
    if(id) {
      const weapon = getWeaponId(id);
      setForm(weapon);
    }
  }, [id]);

  const handleSubmit = event => {
    event.preventDefault();
    id ? editWeapon(id, inputValues) : addWeapon(inputValues);
    resetForm();
  }
  return (
    <section className="main-funciones">
      <h2>{id ? 'EDITAR' : 'AGREGAR'} DATOS</h2>
      <form onSubmit={handleSubmit} >
        <table className="inputDatos">
          <thead>
            <tr>
              <td><label htmlFor="nombre">Nombre:</label></td>
              <td><label htmlFor="dano">Daño:</label></td>
              <td><label htmlFor="typeDano">Tipo de Daño:</label></td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><input className="fInput2" type="text" id="nombre" name="nombre" value={inputValues.nombre} onChange={handleInputChange} /></td>
              <td><input className="fInput2" type="number" id="dano" name="dano" value={inputValues.dano} onChange={handleInputChange} /></td>
              <td><input className="fInput2" type="text" id="typeDano" name="typeDano" value={inputValues.typeDano} onChange={handleInputChange} /></td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <td><label htmlFor="retroceso">Retroceso:</label></td>
              <td><label htmlFor="criticDano">Daño Critico:</label></td>
              <td><label htmlFor="rareza">Rareza:</label></td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><input className="fInput2" type="text" id="retroceso" name="retroceso" value={inputValues.retroceso} onChange={handleInputChange} /></td>
              <td><input className="fInput2" type="text" id="criticDano" name="criticDano" value={inputValues.criticDano} onChange={handleInputChange} /></td>
              <td><input className="fInput2" type="text" id="rareza" name="rareza" value={inputValues.rareza} onChange={handleInputChange} /></td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td></td>
              <td className="btnEnviar"><button className="btn btnEnviar" type="submit" >INGRESAR</button></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </form>
    </section>
  )
}
