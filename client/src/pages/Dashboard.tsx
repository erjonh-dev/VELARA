import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';  // Assicurati che esista
import Footer from '../components/Footer';  // Assicurati che esista

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2">
            <div className="sidebar">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/dashboard/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/personale" className="nav-link">Personale</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/calendario" className="nav-link">Calendario</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/cedolini" className="nav-link">Cedolini</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className="col-md-9 col-lg-10">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
