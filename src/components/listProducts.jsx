import React from 'react'
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import DeleteButton from './deleteButton';


export default function ListProducts() {

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

    const handleDelete = (productId) => {
        const url = 'http://api-verdularia' + productId;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
        })
            .then(response => response.json())
            .then(function (response) {

            })
            const newProducts = products.filter(product => product['@id'] !== productId);
            console.log(newProducts)
            setProducts([...newProducts]);
    }



    return (
        <><h2>Listado de elementos</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product['@id']}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.category.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td><DeleteButton product={product} onDelete={handleDelete} /></td>
                        </tr>
                    ))}
                </tbody>
            </Table></>
    )
}
