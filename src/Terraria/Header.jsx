import { NavLink } from 'react-router-dom';
import terrariaLogo from '../assets/terraria-logo.png';

export const Header = () => {
  return (
    <nav className='navbar' >
      <img className='logo-nav' src={ terrariaLogo } alt="terrariaLogo" />
      <ul className='nav justify-content-end' >

          <li className='nav-item' >
            <NavLink to={'/'} className='nav-link active text-white'>Inicio</NavLink>
          </li>

          <li className='nav-item' >
            <NavLink to={'/requisitos'} className='nav-link active text-white'>Requesitos del sistema</NavLink>
          </li>

          <li className='nav-item' >
            <NavLink to={'/galeria'} className='nav-link active text-white'>Galeria</NavLink>
          </li>

          <li className='nav-item' >
            <NavLink to={'/contacto'} className='nav-link active text-white'>Fanpage</NavLink>
          </li>

          <li className='nav-item' >
            <NavLink to={'/login'} className='btn nav-link active text-white'>Intranet</NavLink>
          </li>

      </ul>
    </nav>
  )
}
