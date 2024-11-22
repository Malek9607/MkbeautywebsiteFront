import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/Actions/UserActions';
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa';

const Register = () => {
  const user = useSelector((state) => state.UserReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async () => {
    await dispatch(registerUser({ username: userName, email, password, phone }));
  };

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h1 className="mb-4 text-center" style={{ color: '#e83e8c' }}>Join Us</h1> {/* Changer la couleur ici */}
      <p className="text-center mb-5" style={{ fontSize: '0.9em', color: '#6c757d' }}>
        Become a part of our community!
      </p>
      <Form style={{ background: '#f7f9fc', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        
        <Form.Group className="mb-4" controlId="formBasicUserName">
          <Form.Label><FaUser /> Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pick a username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label><FaEnvelope /> Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label><FaLock /> Password</Form.Label>
          <div style={{ position: 'relative' }}>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Choose a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: '#e83e8c', // Changer la couleur ici
              }}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPhone">
          <Form.Label><FaPhone /> Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          onClick={handleClick}
          className="w-100"
          style={{
            background: '#e83e8c', // Changer la couleur ici
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            fontSize: '1.1em',
            transition: 'background 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.background = '#d6336c')}
          onMouseOut={(e) => (e.target.style.background = '#e83e8c')}
        >
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default Register;
