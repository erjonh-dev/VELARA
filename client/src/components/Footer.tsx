import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#004d40', color: '#ffffff', padding: '40px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>VELARA</h5>
            <p>Piattaforma HR e Consulente del Lavoro</p>
          </div>
          <div className="col-md-4">
            <h5>Risorse</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none">Clienti</a></li>
              <li><a href="#" className="text-white text-decoration-none">Guide</a></li>
              <li><a href="#" className="text-white text-decoration-none">Webinar ed eventi</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contatti</h5>
            <p>Email: <a href="mailto:support@velara.com" className="text-white text-decoration-none">support@velara.com</a></p>
            <p>Telefono: +39 123 456 789</p>
          </div>
        </div>
        <div className="text-center mt-3">
          <small>&copy; 2025 Velara. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}