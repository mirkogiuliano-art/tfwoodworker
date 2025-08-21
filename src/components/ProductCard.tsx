import React from 'react';
import '../App.css';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>Aggiungi al carrello</button>
      </div>
    </div>
  );
};

export default ProductCard;
