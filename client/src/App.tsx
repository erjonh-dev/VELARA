import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Documenti from './pages/Documenti';  // Importa il nuovo componente
import Calendario from './components/Calendario';  // Importa Calendario dalla cartella components

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Aggiungi una rotta di default per la home page */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        
        {/* Aggiungi la rotta per i documenti del dipendente */}
        <Route path="/documenti/:employeeId" element={<Documenti />} />

        {/* Aggiungi la rotta per il calendario delle presenze e assenze */}
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
    </Router>
  );
}
