import React from 'react';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

export default function ProductContext() {
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
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    )
}
