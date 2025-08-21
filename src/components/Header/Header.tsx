import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; 


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-flex">
        <h2 className="logo">TFWoodWorker</h2>
        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
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
