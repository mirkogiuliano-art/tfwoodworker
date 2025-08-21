import React from 'react';
import { useNavigate } from "react-router-dom";
import './Hero.css'; 

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="container">
        <h1>Artigianato in Legno Unico</h1>
        <p>Scopri la nostra collezione di mobili e accessori realizzati a mano</p>
        <button onClick={() => navigate("/prodotti")}>Esplora Prodotti</button>
      </div>
    </section>
  );
};

export default Hero;
