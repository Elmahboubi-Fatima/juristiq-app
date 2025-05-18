import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="login-bg" style={{ backgroundImage: `url(../images/logo2.jpg)` }}>
      <div className="login-overlay">
        <div className="login-card centered">
          <img src="../images/logo.jpg" alt="Logo JuristiQ" className="logo-top" />
          <h2>Bienvenue sur JuristiQ</h2>
          <p className="subtitle">Votre partenaire juridique fiable</p>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              placeholder="Adresse Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <a href="#" className="forgot-password">Mot de passe oublié ?</a>
            <button type="submit" className="login-button">Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
