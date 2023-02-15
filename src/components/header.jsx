import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header() {
    return (
        <header>
            <div className="container bg_darkbrown">
                <div className="row">
                    <div className="col-4 border border-dark justify-content-center d-flex align-items-center">
                        <img src="/img/icons/icon.png" className="header_icon w-50" alt="" />
                    </div>
                    <div className="col-4">
                        <div className="d-flex h-100 align-items-center justify-content-center">
                            <img src="/img/icons/search_icon.png" className="header_icon mx-2" alt="" />
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex h-100 align-items-center justify-content-center ">
                            <img src="/img/icons/user_icon.png" className="header_icon mx-2" alt="" />
                            <img src="/img/icons/shooping_bag_icon.png" className="header_icon mx-2" alt="" />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="h-100 d-flex justify-content-center align-items-center">
                                <ul className="nav nav-pills fs-4 ff_poppins ">
                                    <li className="nav-item mx-4">
                                        <a className="nav-link fc_pistachio" aria-current="page" href="#">Comprar</a>
                                    </li>
                                    <li className="nav-item mx-4">
                                        <a className="nav-link fc_pistachio" href="#">Conócenos</a>
                                    </li>
                                    <li className="nav-item mx-4">
                                        <a className="nav-link fc_pistachio" href="#">Contacto</a>
                                    </li>
                                    <li className="nav-item mx-4">
                                        <a className="nav-link fc_pistachio" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item mx-4">
                                        <a className="nav-link fc_pistachio" href="#">Vídeos</a>
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
