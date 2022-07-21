import { useNavigate } from "react-router-dom";
import { deleteWeapon, getListWeapons } from "./js/localStorage";

export const WeaponItem = ( {weapon, setWeapons} ) => {

  const { id, nombre, dano, typeDano, retroceso, criticDano, rareza } = weapon;

  const navigate = useNavigate();

  const removeWeapon = () => {
    deleteWeapon(id);
    setWeapons(getListWeapons());
  }

  return (
    <tr>
      <td>{nombre}</td>
      <td>{dano}</td>
      <td>{typeDano}</td>
      <td>{retroceso}</td>
      <td>{criticDano}</td>
      <td>{rareza}</td>
      <td>
        <div className="d-flex gap-3">
          <span type="button" className="btn bg-success" onClick={() => navigate(`/modificar/${id}`)} >Editar</span>
          <span type="button" className="btn bg-danger" onClick={() => removeWeapon()} >Borrar</span>
        </div>
      </td>
    </tr>
  )
}
