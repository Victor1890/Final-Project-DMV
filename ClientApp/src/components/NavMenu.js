import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CircleButton } from './Button';
import './NavMenu.css';

export function NavMenu () {

  const [ items, setItems ] = useState(null);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to='/'>DMV Mercado</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to='/'>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger">Compras</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to='/About'>Sobre Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger">Contactos</Link>
            </li>
            <li className="nav-item cta cta-colored">
              <Link  className="nav-link">
                <i className="fa fa-shopping-cart"></i>
                [0]
              </Link>
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
