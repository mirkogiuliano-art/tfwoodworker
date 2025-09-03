import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Prodotti from './pages/Prodotti';
import Detail from "./pages/Detail";



const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prodotti" element={<Prodotti />} />
      <Route path="/prodotti/:id" element={<Detail />} />
    </Routes>
  );
};

export default App;