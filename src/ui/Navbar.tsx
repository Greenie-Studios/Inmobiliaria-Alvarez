import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  document.addEventListener('scroll', () => {
    setScroll(document.documentElement.scrollTop > 80)
  });

  return (
    <nav className={`navbar ${scroll ? 'scroll' : ''}`}>
      <a href="#" className='navbar-brand'>
        <img src="" alt="Logo"/>
      </a>

      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
            to=''
          >Inicio</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
            to='sales'
          >Venta</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
            to='rents'
          >Renta</NavLink>
        </li>
        {/* <li className='nav-item'>
          <a className='nav-link' href="">Agentes</a>
        </li> */}
        <li className='nav-item'>
          <NavLink
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
            to='admin/home'
          >Admin</NavLink>
        </li>
      </ul>
    </nav>
  )
}