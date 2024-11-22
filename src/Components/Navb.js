import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/Actions/UserActions';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import logo from './images/Logo.png';
import { buyProduct } from '../redux/Actions/ProductActions';

function Navb({ search, setSearch }) {  // Accepter search et setSearch en props
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };


  const user = useSelector(state => state.UserReducer.user);
  const cartItems = useSelector(state => state.cart?.items || []);

  const navbarStyles = {
    backgroundColor: '#FAD1D1',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '8px 0',
  };

  return (
    <>
      <Navbar expand="lg" style={navbarStyles}>
        <Container style={{ maxWidth: '1200px', display: 'flex', alignItems: 'center' }}>
          <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', fontSize: '20px', color: '#333', marginRight: '15px' }}>
            <img 
              src={logo} 
              alt="Mk Beauty Logo" 
              style={{
                height: '100px',
                width: 'auto',
                padding: '5px',
              }} 
            />
          </Navbar.Brand>

          <Nav className="mx-auto" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Form inline className="d-flex w-100" style={{ justifyContent: 'center' }}>
              <FormControl
                type="text"
                placeholder="Search for products"
                className="mr-2"
                value={search}  // Utilisation de search venant de props
                onChange={(e) => setSearch(e.target.value)}  // Mise à jour de search avec setSearch venant de props
                style={{ width: '250px', marginRight: '8px', borderColor: 'black' }}
              />
          
            </Form>
          </Nav>

          <Nav className="ml-auto" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Nav.Link as={Link} to="/products" style={{ color: '#333' }}>
              <Button variant="outline-dark">Product List</Button>
            </Nav.Link>

        

            <Nav.Link as={Link} to="/BuyProduct" style={{ color: '#333', position: 'relative' }}>
            panier
            </Nav.Link>

            {user ? (
              <button
                style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', padding: '6px 12px', cursor: 'pointer' }}
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button
                    style={{ backgroundColor: 'transparent', color: 'black', border: '1px solid black', borderRadius: '4px', padding: '6px 12px', cursor: 'pointer' }}
                  >
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    style={{ backgroundColor: 'transparent', color: 'black', border: '1px solid black', borderRadius: '4px', padding: '6px 12px', cursor: 'pointer', marginLeft: '8px' }}
                  >
                    Register
                  </button>
                </Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navb;
















