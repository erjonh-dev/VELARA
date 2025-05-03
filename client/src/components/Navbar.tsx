import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { Sun, Moon } from 'lucide-react';
import Logo from '../assets/VELARA.png';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
    }

    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString());
      if (newMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      return newMode;
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow`} style={{ height: '80px' }}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={Logo} alt="Velara Logo" className="me-2" style={{ width: '160px', height: '50px' }} />
        </Link>

        
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
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        
        <div className="d-flex align-items-center">
          <ul className="navbar-nav flex-row">
            {location.pathname === '/' ? (
              <>
                <li className="nav-item me-2">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="btn btn-primary">Registrati</Link>
                </li>
              </>
            ) : isAuthenticated ? (
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}
