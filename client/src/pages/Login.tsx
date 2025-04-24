// filepath: c:\Users\Havol\Desktop\VELARA\client\src\pages\Login.tsx
import React from 'react';

export default function Login() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center text-primary mb-4">Benvenuto su Velara</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email o Username</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          Non sei registrato?{' '}
          <a href="/signup" className="text-primary">
            Registrati
          </a>
        </p>
      </div>
    </div>
  );
}