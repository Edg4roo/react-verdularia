import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {

    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Email incorrecto').required('Campo obligatorio'),
        password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .max(15,'La contraseña puede tener máximo 15 caracteres')
        .required('Campo obligatorio')
    })

    const formik = useFormik({
        initialValues: {email:'', password:''},
        onSubmit: (values) => {
        
            let data = {
                email: values.email,
                password: values.password
            }
        
            fetch('https://userprofile.serverred.es/api/login', {
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
                    console.log(response);
                }
            })
        }, 
        validationSchema:loginSchema
    })

    return (
        <div className='contanier-fluid'>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Correu electrònic</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    placeholder="Introduir email" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.email}
                    >
                    </input>
                    {formik.touched.email && formik.errors.email ? 
                        (<div className='text-danger'>{formik.errors.email}</div>):null            
                    }
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
