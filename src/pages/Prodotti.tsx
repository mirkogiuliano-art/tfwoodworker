import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Products from '../components/Products';
import '../App.css';

const Prodotti: React.FC = () => {
    return (
        <>
          <Header />
          <main>
            <Products />
          </main>
          <Footer />
        </>
      );
};

export default Prodotti;
