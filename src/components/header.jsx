import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/bootstrap_commons.css'
import 'popper.js';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header>
            <div class="container bg_darkbrown">
                <div class="row pb-5 pb-md-0 pt-2 pb-md-0">
                    <div class="col-4 justify-content-start justify-content-md-center d-flex align-items-center">
                        <div class="header_icon">
                            <a href="index.html">
                                <img src="img/icons/icon.png" class="d-none d-md-block" alt="" />
                                <img src="img/icons/icon_no_text.png" id="phone_icon" class="d-block d-md-none" alt="" />
                            </a>
                        </div>
                    </div>
                    <div class="col-4 p-0">
                        <div class="d-none d-md-flex h-100 align-items-center justify-content-center">
                            <img src="/img/icons/search_icon.png" class="header_icon mx-2" alt="" />
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="d-flex h-100 align-items-center justify-content-end justify-content-md-center">
                            <div class="dropdown d-flex">
                                <button class="dropdown-toggle btn p-0 m-0 d-flex position-relative" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="img/icons/user_icon.png" class="header_icon" alt="" />
                                </button>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to='/login'>Iniciar sesión</Link></li>
                                </ul>
                            </div>
                            <img src="/img/icons/shooping_bag_icon.png" class="header_icon mx-2" alt="" />
                        </div>
                    </div>
                    <div class="row d-none d-md-block">
                        <div class="col-12">
                            <div class="h-100 d-flex justify-content-center align-items-center">
                                <ul class="nav nav-pills fs-4 ff_poppins ">
                                    <li class="nav-item mx-4">
                                        <a class="nav-link " aria-current="page" href="shop.html">Comprar</a>
                                    </li>
                                    <li class="nav-item mx-4 d-flex align-items-center">
                                        <div class="dropdown">
                                            <a className="dropdown-toggle text-decoration-none" type="button"
                                                id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                Conócenos
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a class="dropdown-item" href="about_us.html">Sobre nosotros</a></li>
                                                <li><a class="dropdown-item" href="how_we_work.html">Cómo trabajamos</a>
                                                </li>
                                                <li><a class="dropdown-item" href="members.html">Socios</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="nav-item mx-4">
                                        <a class="nav-link " href="contact.html">Contacto</a>
                                    </li>
                                    <li class="nav-item mx-4">
                                        <a class="nav-link " href="blog_recipes1.html">Blog</a>
                                    </li>
                                    <li class="nav-item mx-4">
                                        <a class="nav-link " href="v">Vídeos</a>
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
