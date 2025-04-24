import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css'; // Mantieni i tuoi stili personalizzati
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);