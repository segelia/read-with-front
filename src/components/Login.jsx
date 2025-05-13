import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Zaloguj się</h2>
        <input type="email" placeholder="E mail" />
        <input type="password" placeholder="Hasło" />
        <button className="login-button">Zaloguj się</button>
        <p>lub</p>
        <Link to="/register"><button className="register-button">Załóż konto</button></Link>
      </div>
    </div>
  );
};

export default Login;
