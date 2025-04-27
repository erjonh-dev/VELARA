// src/pages/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomeDashboard from '../components/HomeDashboard';
import Personale from '../components/Personale';
import Calendario from '../components/Calendario';  // Importa il componente Calendario

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<{ name: string; company: string }>({
    name: '',
    company: '',
  });

  // Recupera i dati dell'utente loggato dal localStorage
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (loggedInUser) {
      setUser({
        name: loggedInUser.name || 'Nome Utente',
        company: loggedInUser.company || 'Azienda',
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
            <span className="text-muted">Admin</span> {/* Ruolo fisso Admin */}
          </p>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/dashboard/home" className="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/personale" className="nav-link text-white">Personale</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/calendario" className="nav-link text-white">Calendario</Link> {/* Aggiungi il link per Calendario */}
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-10 p-4">
          <Routes>
            <Route path="/home" element={<HomeDashboard />} />
            <Route path="/personale" element={<Personale />} />
            <Route path="/calendario" element={<Calendario />} /> {/* Aggiungi la route per Calendario */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
