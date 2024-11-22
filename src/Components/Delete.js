import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../redux/Actions/UserActions';

const DeleteUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.UserReducer.user);
  const [showModal, setShowModal] = useState(false);

  // Handle showing the confirmation modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Handle user deletion
  const handleDelete = async () => {
    if (user) {
      await dispatch(deleteUser(user._id));
      localStorage.removeItem('token');  // Clear user token
      navigate('/'); // Redirect to homepage
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px', textAlign: 'center' }}>
      <h2 style={{ color: '#ff4d4d' }}>Delete Account</h2>
      <p style={{ color: '#6c757d' }}>
        This action <strong>cannot</strong> be undone. Are you sure you want to delete your account?
      </p>
      <Button
        variant="danger"
        onClick={handleShowModal}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '1em',
          transition: 'background 0.3s ease',
        }}
      >
        Delete My Account
      </Button>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ color: '#dc3545' }}>
            Are you sure you want to permanently delete your account? This action cannot be undone.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes, Delete My Account
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteUser;
