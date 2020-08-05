import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "../../components/Button";

export default function Login() {
  return (
    
    <div className="auth-wrapper" style={{backgroundImage: `url(${require('../../assets/img/bg-login.jpg')})`}}>
      <div className="auth-inner">
        <form action="POST">
          <h3>Iniciar Sesión</h3>

          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="Introducir Correo Electrónico"
              required
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Introducir Contraseña"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Recordarme
              </label>
            </div>
          </div>

          <Button classnameButton='btn btn-primary btn-block'>
            Enviar
          </Button>
          <Link className='link-register-login' to='/Register'>Registrarse</Link>
        </form>
      </div>
    </div>
  );
}
