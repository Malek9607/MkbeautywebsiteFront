import React, { useState } from 'react';
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import { FaTrash, FaEdit, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct, buyProduct } from '../redux/Actions/ProductActions';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const [showEditModal, setShowEditModal] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState(product.price);

  // Handlers for modals
  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  // Delete product handler
  const handleDelete = () => {
    dispatch(deleteProduct(product._id));
  };

  // Update product handler
  const handleUpdate = () => {
    if (updatedPrice !== product.price) {
      dispatch(updateProduct(product._id, updatedPrice));
    }
    handleEditClose();
  };

  // Buy product handler
  const handleBuy = () => {
    dispatch(buyProduct(product));
  };

  return (
    <div className="product-card">
      {/* Image Section */}
      <img src={product.imgURL} alt={product.name} className="product-image" />

      {/* Card Content */}
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="product-price">${product.price}</span>
      </div>

      {/* Buttons Section */}
      <div className="product-actions">
        <Button variant="outline-danger" onClick={handleDelete}>
          <FaTrash />
        </Button>
        <Button
          style={{ backgroundColor: 'pink', borderColor: 'pink', color: 'white' }}
          onClick={handleEditShow}
        >
          <FaEdit />
        </Button>
        <Button variant="outline-success" onClick={handleBuy}>
          <FaShoppingCart />
        </Button>
      </div>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier le produit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text>Nouveau Prix</InputGroup.Text>
              <Form.Control
                type="number"
                value={updatedPrice}
                onChange={(e) => setUpdatedPrice(e.target.value)}
                placeholder="Entrez le nouveau prix"
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Mettre à jour
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductCard;
