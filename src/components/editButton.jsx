import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';

export default function EditButton({ product, onEdit }) {
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState(product.name);
  const [productDescription, setProductDescription] = useState(product.description);
  const [productPrice, setProductPrice] = useState(product.price);
  const [productQuantity, setProductQuantity] = useState(product.quantity);


  const handleEdit = () => {
    onEdit({ ...product, name: productName });
    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>Editar</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductName">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control type="text" value={productName} onChange={(event) => setProductName(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="formProductDescription">
              <Form.Label>Descripción del producto</Form.Label>
              <Form.Control type="text" value={productDescription} onChange={(event) => setProductDescription(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="formProductDescription">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="text" value={productPrice} onChange={(event) => setProductPrice(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="formProductDescription">
              <Form.Label>Descripción del producto</Form.Label>
              <Form.Control type="text" value={productQuantity} onChange={(event) => setProductQuantity(event.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="primary" onClick={handleEdit}>Guardar cambios</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
