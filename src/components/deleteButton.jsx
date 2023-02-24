import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function DeleteButton({ product, onDelete }) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    onDelete(product['@id']);
    setShowModal(false);
  };

  return (
    <>
      <Button variant="danger" onClick={() => setShowModal(true)}>Eliminar</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Está seguro que desea eliminar el producto <strong>{product.name}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}