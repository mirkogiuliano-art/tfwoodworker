import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; 
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-flex">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-18 w-auto" />
          <span className="text-3xl logo">TFWoodWorker</span>
        </div>
        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
            <li><NavLink to="/prodotti" className={({ isActive }) => (isActive ? 'active' : '')}>Prodotti</NavLink></li>
            <li><a href="#chi-siamo">Chi Siamo</a></li>
            <li><a href="#contatti">Contatti</a></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>
      </div>
    </header>
  );
};

export default Header;
