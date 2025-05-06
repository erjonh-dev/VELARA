import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',  
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    if (formData.password !== formData.confirmPassword) {
      newErrors.push('Passwords do not match.');
    }
    if (formData.password.length < 8) {
      newErrors.push('Password must be at least 8 characters long.');
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        });

        if (response.ok) {
          console.log('Registration completed');
          navigate('/login'); 
        } else {
          const error = await response.json();
          setErrors([error.msg || 'Error during registration.']);
        }
      } catch (err) {
        console.error('Network error:', err);
        setErrors(['Network error. Please try again later.']);
      }
    }
  };

  return (
    <div>
      <Navbar /> 
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="text-center text-primary mb-4">Sign up for Velara</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {errors.length > 0 && (
              <div className="alert alert-danger">
                <ul>
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
