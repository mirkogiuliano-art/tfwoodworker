import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/products';
import './Products.css'; 


const Products: React.FC = () => {
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

export default Products;
