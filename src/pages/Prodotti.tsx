import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Products from '../components/Products/Products';

const Prodotti: React.FC = () => {
    return (
        <>
          <div className="app">
            <Header />
            <main>
              <Products />
            </main>
            <Footer />
          </div>
        </>
      );
};

export default Prodotti;
