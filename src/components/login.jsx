import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const loginSchema = Yup.object().shape({
        username: Yup.string().required('Campo obligatorio'),
        password: Yup.string()
        .min(3, 'La contraseña debe tener al menos 3 caracteres')
        .max(15,'La contraseña puede tener máximo 15 caracteres')
        .required('Campo obligatorio')
    })

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {username:'', password:''},
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
        validationSchema:loginSchema
    })

    return (
        <div className='contanier-fluid'>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="username" 
                    placeholder="Introduir username" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.username}
                    >
                    </input>
                    {formik.touched.username && formik.errors.username ? 
                        (<div className='text-danger'>{formik.errors.username}</div>):null            
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
