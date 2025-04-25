import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomeDashboard from '../components/HomeDashboard';
import Personale from '../components/Personale';

export default function Dashboard() {
  const [user, setUser] = useState<{ name: string; role: string; company: string }>({
    name: '',
    role: '',
    company: '',
  });

  // Recupera i dati dell'utente loggato dal localStorage
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (loggedInUser) {
      setUser({
        name: loggedInUser.name || 'Nome Utente', // Usa 'Nome Utente' come fallback se il nome non è presente
        role: loggedInUser.role || 'Ruolo', // Usa 'Ruolo' come fallback se il ruolo non è presente
        company: loggedInUser.company || 'Azienda', // Usa 'Azienda' come fallback se l'azienda non è presente
      });
    }
  }, []);

  return (
    <div className="container-fluid vh-100 bg-light">
      <div className="row h-100">
        {/* Sidebar */}
        <div className="col-md-2 bg-dark text-white p-3">
          <h4 className="text-center text-muted">{user.company}</h4> {/* Nome azienda */}
          <p className="text-center mt-3">
            <strong className="text-black">{user.name}</strong> {/* Nome utente */}
            <br />
            <span className="text-muted">{user.role}</span> {/* Ruolo */}
          </p>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/dashboard/home" className="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/personale" className="nav-link text-white">Personale</Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-10 p-4">
          <Routes>
            <Route path="/home" element={<HomeDashboard />} />
            <Route path="/personale" element={<Personale />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
