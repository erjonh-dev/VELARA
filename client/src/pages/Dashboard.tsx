import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2">
            <div className="sidebar">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/dashboard/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/employees" className="nav-link">Employees</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/calendar" className="nav-link">Calendar</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/payslips" className="nav-link">Payslips</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 col-lg-10">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
