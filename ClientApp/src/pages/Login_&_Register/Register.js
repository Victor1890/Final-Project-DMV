import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export default function Register() {
  return (
    <div className="auth-wrapper" style={{backgroundImage: `url(${require('../../assets/img/bg-register.jpg')})`}}>
      <div className="auth-inner">
        <form>
          <h3>Registrarse</h3>

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
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Repetir Contraseña"
            />
          </div>

          <Button classnameButton="btn btn-primary btn-block">
            Registrarse
          </Button>

          <Link className='link-register-login' to='/Login'>Iniciar Sesión</Link>
        </form>
      </div>
    </div>
  );
}
