import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { updateUser } from '../redux/Actions/UserActions';

const UpdateUser = ({ user, setIsEditing }) => {
  const dispatch = useDispatch();

  // State pour gérer les champs de mise à jour
  const [updatedUser, setUpdatedUser] = useState({
    username: user?.username || '',
    email: user?.email || '',
    age: user?.age || '',
    photo: user?.photo || '',
    phone: user?.phone || '',
  });

  // Fonction pour gérer la soumission du formulaire
  const handleUpdate = async () => {
    if (user) {
      await dispatch(updateUser({ ...updatedUser, _id: user._id }));
      setIsEditing(false); // Fermer le formulaire après la mise à jour
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={updatedUser.username}
          onChange={(e) => setUpdatedUser({ ...updatedUser, username: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={updatedUser.email}
          onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          value={updatedUser.age}
          onChange={(e) => setUpdatedUser({ ...updatedUser, age: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="text"
          value={updatedUser.photo}
          onChange={(e) => setUpdatedUser({ ...updatedUser, photo: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={updatedUser.phone}
          onChange={(e) => setUpdatedUser({ ...updatedUser, phone: e.target.value })}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleUpdate}>
        Save
      </Button>
    </Form>
  );
};

export default UpdateUser;