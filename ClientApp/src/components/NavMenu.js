import React, { useState } from 'react';
import { CircleButton } from './Button';
import './NavMenu.css';

export function NavMenu () {

  const [ items, setItems ] = useState(null);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">DMV Mercado</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger">Compras</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger">Contactos</a>
            </li>
            <li className="nav-item cta cta-colored">
              <a  className="nav-link">
                <i className="fa fa-shopping-cart"></i>
                [0]
              </a>
            </li>
            <li className="nav-item">
              <CircleButton classnameIcon='fa fa-user' classnameButton='nav-link js-scroll-trigger btn btn-circle'></CircleButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
