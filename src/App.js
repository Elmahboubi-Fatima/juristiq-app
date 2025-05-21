import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Dossiers from './Dossiers';
import Audiences from './Audience';
import RendezVous from './RendezVous';
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
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/dossiers"
            element={isAuthenticated ? <Dossiers /> : <Navigate to="/" />}
          />
          <Route
            path="/audiences"
            element={isAuthenticated ? <Audiences /> : <Navigate to="/" />}
          />
          <Route
            path="/rendezvous"
            element={isAuthenticated ? <RendezVous /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
