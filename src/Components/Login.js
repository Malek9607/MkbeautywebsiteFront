import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/Actions/UserActions';
import { FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
  const user = useSelector((state) => state.UserReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    dispatch(loginUser( email, password ));
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
      <h1 className="mb-4 text-center" style={{ color: 'linear-gradient(to right, #ff7eb9, #ff65a3)' }}>Welcome Back!</h1>
      <p className="text-center mb-5" style={{ fontSize: '0.9em', background: 'linear-gradient(to right, #ff7eb9, #ff65a3)', '-webkit-background-clip': 'text', color: 'transparent' }}>
        Log in to continue to your dashboard
      </p>
      <Form style={{ background: '#f7f9fc', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label><FaEnvelope /> Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label><FaLock /> Password</Form.Label>
          <div style={{ position: 'relative' }}>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
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
                color: '#ff7eb9',
              }}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button
          variant="primary"
          onClick={handleClick}
          className="w-100"
          style={{
            background: 'linear-gradient(to right, #ff7eb9, #ff65a3)',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            fontSize: '1.1em',
            transition: 'background 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.background = 'linear-gradient(to right, #ff65a3, #ff7eb9)')}
          onMouseOut={(e) => (e.target.style.background = 'linear-gradient(to right, #ff7eb9, #ff65a3)')}
        >
          Log In
        </Button>
      </Form>
    </div>
  );
}

export default Login;
