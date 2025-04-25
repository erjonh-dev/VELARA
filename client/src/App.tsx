import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Aggiungi una rotta di default per la home page */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
