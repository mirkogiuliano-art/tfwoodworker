import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Prodotti from './pages/Prodotti';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prodotti" element={<Prodotti />} />
    </Routes>
  );
};

export default App;