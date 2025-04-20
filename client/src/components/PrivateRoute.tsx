import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem("token"); // Ottieni il token dal localStorage

  if (!token) {
    // Se non c'è un token, reindirizza al login
    return <Navigate to="/login" />;
  }

  return <Outlet />; // Se c'è il token, permette l'accesso alla dashboard
};

export default PrivateRoute;
