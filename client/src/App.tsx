import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Signup = lazy(() => import('./pages/Signup'));
const HomeDashboard = lazy(() => import('./components/HomeDashboard'));
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Documents = lazy(() => import('./pages/Documents'));
const Employees = lazy(() => import('./components/Employees'));
const PayslipsAndPayments = lazy(() => import('./components/PayslipsAndPayments'));
const Calendar = lazy(() => import('./components/Calendar'));
const Home = lazy(() => import('./pages/Home'));

export default function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="home" element={<HomeDashboard />} />
            <Route path="Employees" element={<Employees />} />
            <Route path="payslips" element={<PayslipsAndPayments />} />
            <Route path="Calendar" element={<Calendar />} />
          </Route>
          <Route path="/Documents/:employeeId" element={<Documents />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
