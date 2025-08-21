import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/productsHome';
import '../App.css';


const ProdottiHome: React.FC = () => {
  return (
    <>
      <section id="prodotti" className="container">
        <h2>I nostri Prodotti</h2>
        <div className="products">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProdottiHome;
