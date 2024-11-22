import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordUser } from '../redux/Actions/UserActions';
import { FaKey } from 'react-icons/fa';

function ResetPassword() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer.user);
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleResetPassword = () => {
    if (password.length >= 8) {
      dispatch(resetPasswordUser(user._id, password));
      setShowSuccess(true);
    } else {
      setIsValid(false);
      setShowSuccess(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px', padding: '20px', background: '#f7f9fc', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 className="mb-4 text-center" style={{ color: '#007bff' }}>Reset Your Password</h2>
      <p className="text-center mb-4" style={{ color: '#6c757d' }}>Enter a new password to secure your account</p>
      
      <Form>
        <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
          <Form.Label column sm="4" style={{ display: 'flex', alignItems: 'center' }}>
            <FaKey style={{ marginRight: '5px', color: '#007bff' }} /> New Password
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="password"
              placeholder="Minimum 8 characters"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setIsValid(true);
                setShowSuccess(false);
              }}
              isInvalid={!isValid}
            />
            <Form.Control.Feedback type="invalid">
              Password must be at least 8 characters.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
      </Form>

      {showSuccess && (
        <div style={{ color: 'green', textAlign: 'center', marginBottom: '15px' }}>
          Password reset successfully!
        </div>
      )}

      <Button
        variant="primary"
        onClick={handleResetPassword}
        className="w-100"
        style={{
          background: '#007bff',
          border: 'none',
          borderRadius: '5px',
          padding: '10px',
          fontSize: '1em',
          transition: 'background 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.background = '#0056b3')}
        onMouseOut={(e) => (e.target.style.background = '#007bff')}
      >
        Reset Password
      </Button>
    </div>
  );
}

export default ResetPassword;
