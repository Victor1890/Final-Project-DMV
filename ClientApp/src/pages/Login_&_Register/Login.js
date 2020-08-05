import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from "../../components/Button";
import { Users } from "../../Services";

export default function Login() {

  const [ email, setEmail ] = useState('');
  const [ pass, setPass ] = useState('');
  const handleChange = e => {
      setEmail(e.target.value);
  }
  const handleChange1 = e => {
    setPass(e.target.value);
  }
  const theSubmit = e => {
    e.preventDefault();
    axios.post("/api/ApiUsers", {
      'Email': email,
      'Password': pass,
    })
    .then(res => {
      window.location.href = '/';
    })
    .catch(e => console.log(e));
  }

  return (
    <div className="auth-wrapper" style={{backgroundImage: `url(${require('../../assets/img/bg-login.jpg')})`}}>
      <div className="auth-inner">
        <form onSubmit={theSubmit}>
          <h3>Iniciar Sesión</h3>

          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              onChange={handleChange}
              name='email'
              type="email"
              className="form-control"
              placeholder="Introducir Correo Electrónico"
              required
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              onChange={handleChange1}
              name='password'
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
