import { FC } from 'react';
import { FaUserTie, FaBuilding, FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

interface Props {
  active: boolean;
}

export const Sidebar: FC<Props> = ({active}) => {
  return (
    <aside className={`admin-side ${active == true ? 'active' : ''}`}>
      <div className="admin-side-header">
        <img src="" alt="logo" />
        <h5>Inmobilaria Alvarez Logo</h5>
      </div>
      <hr />
      <ul className='admin-nav'>
        <li>
          <NavLink
            className={({isActive}) => `admin-nav-link ${isActive ? 'active' : ''}`}
            to='home'
          ><FaHome size={25}/> <h5>Home</h5></NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive}) => `admin-nav-link ${isActive ? 'active' : ''}`}
            to='properties'
          ><FaBuilding size={25}/> <h5>Propiedades</h5></NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive}) => `admin-nav-link ${isActive ? 'active' : ''}`}
            to='agents'
          ><FaUserTie size={25}/> <h5>Agentes</h5></NavLink>
        </li>
      </ul>
    </aside>
  )
}