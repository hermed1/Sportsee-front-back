import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <img src={logo} alt='logo' className='logo' />
      </Link>
      <div className='navLinks__container'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `navlink ${isActive ? 'active-link' : ''}`
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to='/profile'
          className={({ isActive }) =>
            `navlink ${isActive ? 'active-link' : ''}`
          }
        >
          Profil
        </NavLink>
        <NavLink
          to='/settings'
          className={({ isActive }) =>
            `navlink ${isActive ? 'active-link' : ''}`
          }
        >
          Réglages
        </NavLink>
        <NavLink
          to='/community'
          className={({ isActive }) =>
            `navlink ${isActive ? 'active-link' : ''}`
          }
        >
          Communauté
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
