import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Artigianato in Legno Unico</h1>
        <p>Scopri la nostra collezione di mobili e accessori realizzati a mano</p>
        <button onClick={() => window.location.href = '/prodotti'}>Esplora Prodotti</button>
      </div>
    </section>
  );
};

export default Hero;
