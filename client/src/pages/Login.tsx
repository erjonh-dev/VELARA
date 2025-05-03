import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usernameOrEmail: email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Dati ricevuti dal backend:', data);

        
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);

       
        navigate('/dashboard/home');
      } else {
        alert(data.msg || 'Credenziali non valide');
      }
    } catch (error) {
      console.error('Errore durante il login:', error);
      alert('Si è verificato un errore. Riprova più tardi.');
    }
  };

  return (
    <div>
      <Navbar /> 
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="text-center text-primary mb-4">Accedi a Velara</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Accedi</button>
          </form>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}
