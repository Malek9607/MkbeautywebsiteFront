import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from './ProductCart';
import './ProductCard.css'; // CSS pour le style des cartes et de la grille

const BuyProduct = () => {
  // Récupérer les produits achetés du state
  const buyProduct = useSelector((state) => state.ProductReducer?.buy);

  // Calculer la somme totale des prix
  const totalPrice = buyProduct?.reduce((total, product) => total + (product.price || 0), 0);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
        <h1>Vos produits achetés</h1>
        {/* Box pour afficher le prix total */}
        <div
          style={{
            padding: '10px 20px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
        >
          Total: {totalPrice ? `${totalPrice.toFixed(2)} €` : '0.00 €'}
        </div>
      </div>

      {/* Conteneur de la grille */}
      <div className="product-container">
        {buyProduct?.length > 0 ? (
          buyProduct.map((product) => (
            <ProductCart key={product._id} product={product} />
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>
            Aucun produit acheté pour le moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default BuyProduct;
