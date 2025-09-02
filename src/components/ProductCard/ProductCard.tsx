import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

interface ProductCardProps {
  id: string; // aggiungo id/slug per identificare il prodotto
  title: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/prodotti/${id}`);
  };

  return (
    <div className="card" onClick={goToDetail}>
      <img src={image} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={(e) => { e.stopPropagation(); goToDetail(); }}>
          Vedi dettaglio
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
