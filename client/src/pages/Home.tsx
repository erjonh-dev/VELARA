import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image from '../assets/image.png'; 

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container text-center py-5">
        <h1 className="display-4 text-primary mb-4">Velara: The New Way to Hire, Manage, and Pay Employees</h1>
        <p className="lead mb-4">
          Automate HR processes and simplify payroll management, alongside a dedicated Labor Consultant.
        </p>
        <a href="/signup" className="btn btn-success btn-lg">
          Try Velara
        </a>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card velara-card border-0 h-100 hover-card">
              <div className="card-body text-center">
                <h5 className="card-title">
                  <span className="d-block" style={{ fontSize: '3rem' }}>👥</span>
                  Hire
                </h5>
                <p className="card-text">
                  Manage hiring and cost simulations quickly and easily.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card velara-card border-0 h-100 hover-card">
              <div className="card-body text-center">
                <h5 className="card-title">
                  <span className="d-block" style={{ fontSize: '3rem' }}>💰</span>
                  Pay
                </h5>
                <p className="card-text">
                  Automate the management of payslips and salaries with ease.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card velara-card border-0 h-100 hover-card">
              <div className="card-body text-center">
                <h5 className="card-title">
                  <span className="d-block" style={{ fontSize: '3rem' }}>🗂️</span>
                  Manage
                </h5>
                <p className="card-text">
                  Organize vacations, leaves, and much more with a click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="container-fluid py-5">
        <div className="container velara-highlight-box text-center">
          <h2 className="mb-4">Why Choose Velara?</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <ul className="list-unstyled text-start">
                <li className="mb-3">✔ Automates HR processes</li>
                <li className="mb-3">✔ Simplified salary and payslip management</li>
                <li className="mb-3">✔ Support from a labor consultant</li>
                <li className="mb-3">✔ Customized solutions for each company</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src={image}
                alt="Screenshot Placeholder"
                className="img-fluid rounded"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
