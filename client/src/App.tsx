import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import HomeDashboard from './components/HomeDashboard';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Documenti from './pages/Documenti';
import Personale from './components/Personale';
import Cedolini from './components/CedoliniPagamenti';
import Calendario from './components/Calendario';
import Home from './pages/Home';  

export default function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<HomeDashboard />} />
          <Route path="personale" element={<Personale />} />
          <Route path="cedolini" element={<Cedolini />} />
          <Route path="calendario" element={<Calendario />} />
        </Route>

     
        <Route path="/documenti/:employeeId" element={<Documenti />} />
      </Routes>
    </Router>
  );
}
