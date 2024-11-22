import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Form } from 'react-bootstrap';
import { deleteUser, resetPasswordUser } from '../redux/Actions/UserActions';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const user = useSelector(state => state.UserReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const togglePasswordForm = () => {
    setShowPasswordForm(!showPasswordForm);
  };

  const handleDelete = async () => {
    await dispatch(deleteUser(user._id));
    navigate("/");
  };

  const handleChangePassword = async () => {
    if (newPassword.length >= 6) {
      await dispatch(resetPasswordUser(user._id, newPassword));
      setShowPasswordForm(false);
    } else {
      alert('Password must be at least 6 characters long!');
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="profile-card-wrapper" style={{ maxWidth: '500px', width: '100%' }}>
        <h1 className="mb-4 text-center text-dark">My Profile</h1>
        <Card className="mx-auto shadow-lg rounded-lg" style={{ background: '#f8f9fa' }}>
          {user?.photo ? (
            <Card.Img variant="top" src={user.photo} style={{ objectFit: 'cover', height: '200px' }} />
          ) : (
            <div className="no-photo" style={{ height: '200px', backgroundColor: '#007bff', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span>No Photo</span>
            </div>
          )}
          <Card.Body>
            <Card.Title className="text-center">{user?.username}</Card.Title>
            <Card.Text>Email: {user?.email}</Card.Text>
            <Card.Text>Age: {user?.age}</Card.Text>
            <Card.Text>Phone: {user?.phone}</Card.Text>
            
            <div className="d-flex justify-content-between mt-3">
              <Button variant="danger" onClick={handleDelete} className="w-45">
                Delete Account
              </Button>
              <Button variant="info" onClick={togglePasswordForm} className="w-45">
                {showPasswordForm ? "Cancel" : "Change Password"}
              </Button>
            </div>

            {showPasswordForm && (
              <div className="mt-3">
                <Form.Group controlId="formNewPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <Button variant="primary" className="mt-2 w-100" onClick={handleChangePassword}>
                    Update Password
                  </Button>
                </Form.Group>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
