// src/components/Register.jsx
import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Załóż konto</h2>
        <input type="text" placeholder="Imię i nazwisko" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Hasło" />
        <input type="password" placeholder="Powtórz hasło" />
        <button className="register-button">Zarejestruj się</button>
        <p className="note">Rejestrując się, akceptujesz regulamin ReadWith.</p>
      </div>
    </div>
  );
};

export default Register;
