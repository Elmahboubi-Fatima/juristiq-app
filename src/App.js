import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    if (email === 'hanae@Jannah.com' && password === '1234') {
      setIsAuthenticated(true);
    } else {
      alert('Email or password incorrect!');
    }
  };

  return (
    <div className="App">
      {isAuthenticated ? <Dashboard /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
