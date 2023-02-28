import React, { useContext } from 'react';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/bootstrap_commons.css'
import 'popper.js';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';

export default function Header() {

    const { isLogged } = useContext(UserContext);

    const username = useContext(UserContext);

    return (
        <header>
            <div className="container bg_darkbrown">
                <div className="row pb-5 pb-md-0 pt-2 pb-md-0">
                    <div className="col-4 justify-content-start justify-content-md-center d-flex align-items-center">
                        <div className="header_icon">
                            <a href="index.html">
                                <img src="img/icons/icon.png" className="d-none d-md-block" alt="" />
                                <img src="img/icons/icon_no_text.png" id="phone_icon" className="d-block d-md-none" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-4 p-0">
                        <div className="d-none d-md-flex h-100 align-items-center justify-content-center">
                            <img src="/img/icons/search_icon.png" className="header_icon mx-2" alt="" />
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex h-100 align-items-center justify-content-end justify-content-md-center">
                            {isLogged === true ? <h5 className="text-primary">{username.user.username}</h5> : ''}
                            <div className="dropdown d-flex">
                                <button className="dropdown-toggle btn p-0 m-0 d-flex position-relative" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="img/icons/user_icon.png" className="header_icon" alt="" />
                                </button>
                                <ul className="dropdown-menu">
                                    {isLogged === false ?
                                        <li><Link className="dropdown-item" to='/login'>Login</Link></li> :
                                        <li><Link className="dropdown-item" to='/logout'>Salir</Link></li>
                                    }
                                </ul>
                            </div>
                            <img src="/img/icons/shooping_bag_icon.png" className="header_icon mx-2" alt="" />
                        </div>
                    </div>
                    <div className="row d-none d-md-block">
                        <div className="col-12">
                            <div className="h-100 d-flex justify-content-center align-items-center">
                                <ul className="nav nav-pills fs-4 ff_poppins ">
                                    <li className="nav-item mx-4">
                                        <Link className="nav-link" to='/'>Comprar</Link>
                                    </li>
                                    {isLogged === true ?
                                        <li className="nav-item mx-4 d-flex align-items-center">
                                            <div className="dropdown">
                                                <a className="dropdown-toggle text-decoration-none" type="button"
                                                    id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Gestiones
                                                </a>

                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <li><Link className="dropdown-item" to='/list_products'>Todos los productos</Link></li>
                                                    <li><Link className="dropdown-item" to='/new_product'>Nuevo producto</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        : ''}
                                    <li className="nav-item mx-4 d-flex align-items-center">
                                        <div className="dropdown">
                                            <a className="dropdown-toggle text-decoration-none" type="button"
                                                id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                Conócenos
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a className="dropdown-item" href="about_us.html">Sobre nosotros</a></li>
                                                <li><a className="dropdown-item" href="how_we_work.html">Cómo trabajamos</a>
                                                </li>
                                                <li><a className="dropdown-item" href="members.html">Socios</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item mx-4">
                                        <a className="nav-link " href="contact.html">Contacto</a>
                                    </li>
                                    <li className="nav-item mx-4">
                                        <a className="nav-link " href="blog_recipes1.html">Blog</a>
                                    </li>
                                    <li className="nav-item mx-4">
                                        <a className="nav-link " href="v">Vídeos</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}