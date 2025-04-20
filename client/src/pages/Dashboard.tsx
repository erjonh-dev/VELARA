import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  // Log per verificare se il token è presente e il codice viene eseguito
  console.log('Token trovato:', token);

  // Se non c'è un token, reindirizza al login
  if (!token) {
    console.log("Nessun token trovato, redirigo al login...");
    navigate('/login');
    return null;  // Assicurati di non renderizzare nulla finché non c'è un token
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  console.log('Dashboard caricata!');  // Verifica che la dashboard venga caricata correttamente

  return (
    <div>
      <h1>Benvenuto nel Dashboard!</h1>
      <p>Questa è la tua dashboard personale. Puoi visualizzare e gestire le tue informazioni qui.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
