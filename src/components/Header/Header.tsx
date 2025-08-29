import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SocialIcons from '../SocialIcons/SocialIcons';
import './Header.css'; 
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-flex">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo">TFWoodWorker</span>
        </div>
        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
            <li><NavLink to="/prodotti" className={({ isActive }) => (isActive ? 'active' : '')}>Prodotti</NavLink></li>
            <li><a href="#chi-siamo">Chi Siamo</a></li>
            <li><a href="#contatti">Contatti</a></li>
          </ul>
        </nav>
        <SocialIcons />
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>
      </div>
    </header>
  );
};

export default Header;
