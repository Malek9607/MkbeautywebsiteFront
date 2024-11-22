import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, InputGroup, Row, Col } from 'react-bootstrap';
import { addProduct, getProducts } from '../redux/Actions/ProductActions';

const ProductsList = ({ search }) => {
  const dispatch = useDispatch();
  const ListProduct = useSelector((state) => state.ProductReducer.products);

  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [imgURL, setImgURL] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddProduct = () => {
    dispatch(addProduct({ name, description, price, imgURL }));
    handleClose();
    setName('');
    setDescription('');
    setPrice(0);
    setImgURL('');
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Nos Produits</h1>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ marginBottom: '1rem', backgroundColor: '#007bff', border: 'none' }}
      >
        Ajouter un produit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        dialogClassName="w-50 mx-auto"
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: '#ffcab0', borderBottom: 'none' }}
        >
          <Modal.Title>Ajouter un Produit</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#ffcab0' }}>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{ backgroundColor: '#ffc7a8' }}>
                Nom
              </InputGroup.Text>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Nom du produit"
                style={{ border: '1px solid #ffc7a8' }}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{ backgroundColor: '#ffc7a8' }}>
                Description
              </InputGroup.Text>
              <Form.Control
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Description du produit"
                style={{ border: '1px solid #ffc7a8' }}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{ backgroundColor: '#ffc7a8' }}>
                Prix
              </InputGroup.Text>
              <Form.Control
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeholder="Prix du produit"
                style={{ border: '1px solid #ffc7a8' }}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{ backgroundColor: '#ffc7a8' }}>
                Image URL
              </InputGroup.Text>
              <Form.Control
                onChange={(e) => setImgURL(e.target.value)}
                value={imgURL}
                placeholder="Lien de l'image"
                style={{ border: '1px solid #ffc7a8' }}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#ffcab0', borderTop: 'none' }}>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              backgroundColor: '#6c757d',
              border: 'none',
              color: '#fff',
            }}
          >
            Fermer
          </Button>
          <Button
            variant="primary"
            onClick={handleAddProduct}
            style={{
              backgroundColor: '#007bff',
              border: 'none',
            }}
          >
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>

      <Row xs={1} md={2} lg={3} className="g-4">
        {ListProduct.length === 0 ? (
          <p>Aucun produit disponible</p>
        ) : search.trim() ? (
          ListProduct.filter((element) =>
            element.name.toUpperCase().includes(search.toUpperCase())
          ).map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          ListProduct.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default ProductsList;
