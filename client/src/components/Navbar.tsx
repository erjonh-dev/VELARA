import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Logo from '../assets/VELARA.png'; // Assicurati che il percorso sia corretto

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? '#ffffff' : '#121212'; // Cambia il colore dello sfondo
    document.body.style.color = darkMode ? '#000000' : '#ffffff'; // Cambia il colore del testo
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow`}
      style={{ height: '80px' }}
    >
      <div className="container-fluid">
        {/* Dark Mode Toggle (Torcia) */}
        <button
          className="btn btn-outline-secondary me-3"
          onClick={toggleDarkMode}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
          }}
        >
          {darkMode ? '🌞' : '🌙'}
        </button>

        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Velara Logo" className="me-2" style={{ width: '160px', height: '50px' }} />
        </Link>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Registrazione */}
            <li className="nav-item">
              <Link to="/signup" className="btn btn-primary me-2">
                Registrazione
              </Link>
            </li>
            {/* Login */}
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}