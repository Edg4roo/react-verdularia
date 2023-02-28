import { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

export default function SearchForm({childToParent}) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const queryString = `?name=${encodeURIComponent(searchQuery)}`;
        fetch('https://api-verdularia.08edgar.daw.iesevalorpego.es/api/products' + queryString)
            .then(response => response.json())
            .then(data => {
                childToParent(data['hydra:member'])
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Form inline onSubmit={handleSubmit}>
            <FormControl type="text" value={searchQuery} onChange={handleChange} placeholder="Search" className="mr-sm-2" />
            <Button type="submit" variant="outline-success">Search</Button>
        </Form>
    );
}