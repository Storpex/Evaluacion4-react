import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export const Header = () => {
  return (
    <header className="header">
      <img className='header-logo' src={ logo } />
      <h1 className="header-titulo">MONITORES</h1>
      <ul>
        <li>
          <NavLink to={'/intranet'} className='text-white' >Visualizar Todo</NavLink>
        </li>
        <li>
        </li>
          <NavLink to={'/agregar'} className='text-white' >Agregar</NavLink>
        <li>
          <NavLink to={'/'} className='btn text-white' >SALIR</NavLink>
        </li>
      </ul>
    </header>
  )
}
