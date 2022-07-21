import { useEffect, useState } from "react"
import { getListWeapons } from "./js/localStorage";
import { WeaponItem } from "./"

export const WeaponList = () => {

  const [ weapons, setWeapons ] = useState([]);

  useEffect(() => {
    setWeapons(getListWeapons());
  }, []);

  return (
    <section className="main-tabla">

      {
        weapons.length > 0 ? (
          <table className="tabla-productos text-white" id="tabla-productos">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Daño</th>
                <th>Tipo de Daño</th>
                <th>Retroceso</th>
                <th>Daño Critico</th>
                <th>Rareza</th>
                <th></th>
              </tr>
            </thead>

            <tbody id="tabla-body">
              {
                weapons.map( (weapon) =>
                  <WeaponItem
                    weapon={weapon}
                    key={weapon.id}
                    setWeapons={setWeapons}
                  />
                )
              }
            </tbody>
          </table>
        ): ( <h3 className="text-white" >no hay armas</h3> )
      }

    </section>
  )
}
