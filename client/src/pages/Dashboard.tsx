import React, { useEffect, useState } from 'react';
import HomeDashboard from '../components/HomeDashboard';
import Personale from '../components/Personale';
import Calendario from '../components/Calendario';
import CedoliniPagamenti from '../components/CedoliniPagamenti';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<{ name: string; company: string }>({
    name: '',
    company: '',
  });

  const [activeSection, setActiveSection] = useState<string>('home');

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
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <aside className="sidebar-left p-3">
          <h5 className="text-center text-muted">{user.company}</h5>
          <p className="text-center mt-3">
            <strong className="text-black">{user.name}</strong><br />
            <span className="text-muted">Admin</span>
          </p>
          <nav className="nav flex-column mt-4">
            <button
              className={`nav-link text-start ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setActiveSection('home')}
            >
              Home
            </button>
            <button
              className={`nav-link text-start ${activeSection === 'personale' ? 'active' : ''}`}
              onClick={() => setActiveSection('personale')}
            >
              Personale
            </button>
            <button
              className={`nav-link text-start ${activeSection === 'calendario' ? 'active' : ''}`}
              onClick={() => setActiveSection('calendario')}
            >
              Calendario
            </button>
            <button
              className={`nav-link text-start ${activeSection === 'cedolini-pagamenti' ? 'active' : ''}`}
              onClick={() => setActiveSection('cedolini-pagamenti')}
            >
              Cedolini e Pagamenti
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow-1 p-4">
          {activeSection === 'home' && <HomeDashboard />}
          {activeSection === 'personale' && <Personale />}
          {activeSection === 'calendario' && <Calendario />}
          {activeSection === 'cedolini-pagamenti' && <CedoliniPagamenti />}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
