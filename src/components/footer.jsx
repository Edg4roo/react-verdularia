import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/bootstrap_commons.css'

export default function Footer() {
  return (
    <footer class="w-100 mb-0">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center">
                <h4>Verdularia</h4>
                <p>C/Inventada, 4,<br/>
                    Oliva, Valencia (46780)</p>
            </div>
            <div class="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center">
                <h4>Contacto</h4>
                <ul class="p-0">
                    <li>Num. tlf: 000 000 000</li>
                    <li>verdularia@gmail.com</li>
                    <a href=""><img src="/img/icons/twitter_icon.png" alt="twitter"/></a>
                    <a href=""><img src="/img/icons/instagram_icon.png" alt="instagram"/></a>
                    <a href=""><img src="/img/icons/facebook_icon.png" alt="facebook"/></a>
                    <a href=""><img src="/img/icons/linkedin_icon.png" alt="linkedin"/></a>
                </ul>
            </div>
            <div class="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center">
                <h4>Legal</h4>
                <ul class="p-0">
                    <li><a href="">Política de privacidad</a></li>
                    <li><a href=""> Términos y condiciones</a></li>
                    <li><a href=""> Política de cookies</a></li>
                </ul>
            </div>
            <div class="col-12 col-md-3 d-flex align-items-center justify-content-center">
                <img src="/img/icons/organic_logo.png" class="me-4 footer_logo" alt=""/>
                <img src="/img/icons/sustainable_logo.png" class="footer_logo" alt=""/>
            </div>
        </div>
    </div>
</footer>
  )
}
