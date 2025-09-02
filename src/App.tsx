import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Prodotti from './pages/Prodotti';
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductDetailsBello from "./components/ProductDetail/ProductDetailsBello";



const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prodotti" element={<Prodotti />} />
      <Route path="/prodotti/:id" element={<ProductDetailsBello />} /> {/* dettaglio */}
    </Routes>
  );
};

export default App;