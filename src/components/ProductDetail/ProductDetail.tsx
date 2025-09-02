import React, { useState } from "react";
import "./ProductDetail.css";

interface Variant {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

interface Media {
  id: string;
  src: string;
  alt: string;
}

interface Product {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  media: Media[];
  variants: Variant[];
  description?: string;
  materials?: string;
  dimensions?: string;
  care?: string;
}

const mockProduct: Product = {
  id: "panca-legno",
  title: "Panca Cutter",
  subtitle: "Minimal bench in solid wood",
  price: 299,
  media: [
    { id: "1", src: "/images/prod1.jpg", alt: "Vista frontale" },
    { id: "2", src: "/images/prod2.jpg", alt: "Dettaglio legno" },
    { id: "3", src: "/images/prod3.jpg", alt: "Angolo laterale" },
  ],
  variants: [
    { id: "oak", name: "Rovere", price: 299, inStock: true },
    { id: "teak", name: "Teak", price: 349, inStock: true },
  ],
  description:
    "La panca Cutter è realizzata a mano in legno massello, rifinita con oli naturali per esaltarne le venature.",
  materials: "Legno massello di quercia o teak",
  dimensions: "100 × 40 × 43.5 cm",
  care: "Pulire con panno umido, oliare periodicamente",
};

const ProductDetail: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(mockProduct.media[0]);
  const [selectedVariant, setSelectedVariant] = useState(mockProduct.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"descrizione" | "dettagli" | "dimensioni">("descrizione");

  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/prodotti">Prodotti</a> / {mockProduct.title}
      </div>

      <div className="product-container">
        {/* Galleria */}
        <div className="image-gallery">
          <img src={selectedImage.src} alt={selectedImage.alt} className="main-image" />
          <div className="thumbnails">
            {mockProduct.media.map((m) => (
              <img
                key={m.id}
                src={m.src}
                alt={m.alt}
                className={`thumbnail ${selectedImage.id === m.id ? "active" : ""}`}
                onClick={() => setSelectedImage(m)}
              />
            ))}
          </div>
        </div>

        {/* Info prodotto */}
        <div className="product-info">
          <h1 className="product-title">{mockProduct.title}</h1>
          {mockProduct.subtitle && <p className="product-subtitle">{mockProduct.subtitle}</p>}
          <p className="product-price">€{selectedVariant.price}</p>

          {/* Varianti */}
          <div className="variants">
            {mockProduct.variants.map((v) => (
              <button
                key={v.id}
                className={`variant-btn ${selectedVariant.id === v.id ? "active" : ""}`}
                onClick={() => setSelectedVariant(v)}
                disabled={!v.inStock}
              >
                {v.name}
              </button>
            ))}
          </div>

          {/* Quantità */}
          <div className="quantity">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          {/* Bottone */}
          <button className="add-to-cart">Aggiungi al carrello</button>

          {/* Tab descrizione/dettagli/dimensioni */}
          <div className="tabs">
            <div className="tab-buttons">
              <button
                className={activeTab === "descrizione" ? "active" : ""}
                onClick={() => setActiveTab("descrizione")}
              >
                Descrizione
              </button>
              <button
                className={activeTab === "dettagli" ? "active" : ""}
                onClick={() => setActiveTab("dettagli")}
              >
                Dettagli
              </button>
              <button
                className={activeTab === "dimensioni" ? "active" : ""}
                onClick={() => setActiveTab("dimensioni")}
              >
                Dimensioni
              </button>
            </div>
            <div className="tab-content">
              {activeTab === "descrizione" && <p>{mockProduct.description}</p>}
              {activeTab === "dettagli" && (
                <p>
                  Materiali: {mockProduct.materials} <br />
                  Cura: {mockProduct.care}
                </p>
              )}
              {activeTab === "dimensioni" && <p>{mockProduct.dimensions}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
