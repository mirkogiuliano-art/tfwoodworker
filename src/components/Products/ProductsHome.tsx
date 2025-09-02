import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/productsHome';


const ProductsHome: React.FC = () => {
  return (
    <>
      <section id="prodotti" className="container">
        <h2>I nostri Prodotti</h2>
        <div className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}       // usa l'id univoco come chiave
              id={product.id}        // passa l'id al ProductCard
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

export default ProductsHome;
