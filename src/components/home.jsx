import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SearchForm from './searchForm';

export default function Home() {

  const [products, setProducts] = useState([]);

  const childToParent = (childdata) => {
    const searchResult = childdata;
    setProducts([...searchResult])
  }

  useEffect(() => {
    fetch('https://api-verdularia.08edgar.daw.iesevalorpego.es/api/products')
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
      <SearchForm childToParent={childToParent}> </SearchForm>
      <Row className='gy-5'>
        {products.map((product) => (
          <Col key={product.id} md={4} className="d-flex">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.name}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.category.name}</Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
