import React from 'react'
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import DeleteButton from './deleteButton';
import EditButton from './editButton';

export default function ListProducts() {

    const [products, setProducts] = useState([]);

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

    const handleDelete = (productId) => {
        const url = 'https://api-verdularia.08edgar.daw.iesevalorpego.es' + productId;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
        })
        const newProducts = products.filter((product) => product['@id'] !== productId);
        setProducts(newProducts);
    }

    const handleEdit = (productToUpdate) => {
        const url = 'https://api-verdularia.08edgar.daw.iesevalorpego.es' + productToUpdate['@id'];
        const data = {
            name: productToUpdate.name,
            description: productToUpdate.description,
            price: productToUpdate.price,
            quantity: productToUpdate.quantity,
        }
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
            body: JSON.stringify(data),
        })


        const objetoEncontrado = products.find(objeto => objeto['@id'] === productToUpdate['@id']);

        if (objetoEncontrado) {
            console.log(objetoEncontrado)
            const newProducts = products.filter((product) => product['@id'] !== productToUpdate['@id']);
            console.log(newProducts)
            newProducts.push(productToUpdate);
            setProducts(newProducts);
        }
    };


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
                            <td><DeleteButton product={product} onDelete={handleDelete} /> <EditButton product={product} onEdit={handleEdit} /></td>
                        </tr>
                    ))}
                </tbody>
            </Table></>
    )
}
