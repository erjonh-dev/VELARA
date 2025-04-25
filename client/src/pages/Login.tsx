import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

        // Salva i dati dell'utente nel localStorage
        localStorage.setItem('user', JSON.stringify(data.user)); // Salva nome, ruolo, ecc.

        // Salva anche il token nel localStorage
        localStorage.setItem('token', data.token); // Salva il token per le richieste future

        // Reindirizza alla dashboard
        navigate('/dashboard/home');
      } else {
        // Mostra un messaggio di errore
        alert(data.msg || 'Credenziali non valide');
      }
    } catch (error) {
      console.error('Errore durante il login:', error);
      alert('Si è verificato un errore. Riprova più tardi.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />
        </div>
        <button type="submit" className="btn btn-primary">Accedi</button>
      </form>
    </div>
  );
}
