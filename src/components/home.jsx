import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://api-verdularia/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data['hydra:member']);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <h1>Lista de productos</h1>
      <Row className='gy-5'>
        {products.map((product) => (
          <Col key={product.id} md={4} className="d-flex">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
