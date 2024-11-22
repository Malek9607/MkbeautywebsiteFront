import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/Actions/ProductActions';
import './ProductCard.css'; // Inclure les styles

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  // État local pour le compteur de quantité
  const [quantity, setQuantity] = useState(0);

  const handleDelete = () => {
    dispatch(deleteProduct(product._id));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-card">
      {/* Conteneur de l'image */}
      <div className="product-image-container">
        <img src={product.imgURL} alt={product.name} className="product-image" />
      </div>

      {/* Détails du produit */}
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="product-price">${product.price}</span>
      </div>

      {/* Actions */}
      <div className="product-actions">
        <Button variant="outline-danger" onClick={handleDelete}>
          <FaTrash />
        </Button>
        <div className="quantity-controls">
          <Button variant="outline-secondary" onClick={handleDecrement}>
            <FaMinus />
          </Button>
          <span className="quantity-value">{quantity}</span>
          <Button variant="outline-primary" onClick={handleIncrement}>
            <FaPlus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
