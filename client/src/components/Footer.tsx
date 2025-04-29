import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/globals.css'; // Importa il file CSS

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>VELARA</h3>
            <p>Piattaforma HR e Consulente del Lavoro</p>
          </div>
          <div className="col-md-4">
            <h3>Risorse</h3>
            <ul className="list-unstyled">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Clienti</a></li>
              <li><a href="#">Guide</a></li>
              <li><a href="#">Webinar ed eventi</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contatti</h3>
            <p>Email: <a href="mailto:support@velara.com">support@velara.com</a></p>
            <div className="d-flex">
              <a href="https://github.com/HavolliErjon" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/erjon-havolli/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <small>&copy; 2025 Velara. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
