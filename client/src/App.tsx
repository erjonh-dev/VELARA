import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';  
import HomeDashboard from './components/HomeDashboard'; 
import Login from './pages/Login';  
import Dashboard from './pages/Dashboard'; 
import Documents from './pages/Documents';  
import Employees from './components/Employees';  
import PayslipsAndPayments from './components/PayslipsAndPayments'; 
import Calendar from './components/Calendar';  
import Home from './pages/Home';  

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main home page */}
        <Route path="/" element={<Home />} />

        {/* Page for user registration */}
        <Route path="/signup" element={<Signup />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Main dashboard route with nested routes for different sections */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Home section in the dashboard */}
          <Route path="home" element={<HomeDashboard />} />
          
          {/* Employees management section */}
          <Route path="Employees" element={< Employees />} />
          
          {/* Payslips and payments section */}
          <Route path="payslips" element={<PayslipsAndPayments />} />
          
          {/* Calendar section for managing employee attendance and absences */}
          <Route path="Calendar" element={<Calendar />} />
        </Route>

        {/* Specific employee document section */}
        <Route path="/Documents/:employeeId" element={<Documents />} />
      </Routes>
    </Router>
  );
}
