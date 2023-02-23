import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function NewProduct() {

    const newProductSchema = Yup.object().shape({
        name: Yup.string().required('El nombre es obligatorio'),
        description: Yup.string().required('La descripción es obligatoria'),
        price: Yup.number()
          .typeError('El precio debe ser un número')
          .required('El precio es obligatorio')
          .min(0.01, 'El precio debe ser mayor a 0.01'),
        quantity: Yup.number()
          .typeError('La cantidad debe ser un número')
          .required('La cantidad es obligatoria')
          .min(1, 'La cantidad debe ser mayor o igual a 1'),
        category: Yup.string().required('La categoría es obligatoria'),
    })

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {name:'', description:'', price: 0, quantity: 0, category: ''},
        onSubmit: (values) => {
        
            let data = {
                username: values.username,
                password: values.password
            }
        
            fetch('https://api-verdularia.08edgar.daw.iesevalorpego.es/login', {
                method: 'POST',
                headers: {
                    'Content-type':'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(function (response) {
                if (response.error != null) {
                    console.log(data.error);
                } else {
                    localStorage.setItem('token',response.token);
                    navigate('/');
                }
            })
        }, 
        validationSchema:newProductSchema
    })

    return (
        <div className='contanier-fluid'>
            <h1>Nuevo producto</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.name}
                    >
                    </input>
                    {formik.touched.name && formik.errors.name ? 
                        (<div className='text-danger'>{formik.errors.name}</div>):null            
                    }
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="description">Descripción</label>
                            <input
                            type="text" 
                            className="form-control" 
                            name="description" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.description}>
                            </input>
                            {formik.touched.description && formik.errors.description ? 
                                (<div className='text-danger'>{formik.errors.description}</div>):null            
                            }
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="price">Precio</label>
                            <input
                            type="number" 
                            className="form-control" 
                            name="price" 
                            placeholder="Contrasenya" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.price}>
                            </input>
                            {formik.touched.price && formik.errors.price ? 
                                (<div className='text-danger'>{formik.errors.price}</div>):null            
                            }
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="password">Contrasenya</label>
                            <input
                            type="password" 
                            className="form-control" 
                            name="password" 
                            placeholder="Contrasenya" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.password}>
                            </input>
                            {formik.touched.password && formik.errors.password ? 
                                (<div className='text-danger'>{formik.errors.password}</div>):null            
                            }
                        </div>
                    </div>
                </div>
                <button type="submit" id="enviar" className="mt-2 btn btn-primary">Accedir</button>
            </form>

        </div>
    )
}
