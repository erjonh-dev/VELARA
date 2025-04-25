import React, { useEffect, useState } from 'react';

export default function HomeDashboard() {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user') || '{}'); // Recupera i dati dell'utente dal localStorage
    if (loggedInUser && loggedInUser.name) {
      setUserName(loggedInUser.name); // Imposta il nome dell'utente se disponibile
    }
  }, []);

  return (
    <div className="container-fluid p-4">
      <h2>Ciao, {userName || 'Utente'}</h2> {/* Mostra il nome dell'utente, oppure "Utente" se non disponibile */}
      <p>Benvenuto nel pannello di amministrazione. Qui puoi gestire tutto ciò che riguarda i tuoi dipendenti e la tua azienda.</p>

      <div className="row mt-4">
        {/* Da approvare */}
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Da approvare</h5>
              <p>5 richieste di assenza</p>
              <p>6 richieste di rimborso spese</p>
              <a href="#" className="btn btn-primary">Vai alle richieste</a>
            </div>
          </div>
        </div>

        {/* Prossimi eventi */}
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Prossimi eventi</h5>
              <ul>
                <li>Scadenza pagamento dell'F24: 16/09/2024</li>
                <li>Fine del periodo di prova di Musk Elon: 01/12/2024</li>
                <li>Compleanno di Biondi Valeria: 01/01/2025</li>
                <li>Compleanno di Rossi Mirco: 01/02/2025</li>
              </ul>
              <a href="#" className="btn btn-primary">Vedi tutti</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Ultimo ciclo paghe */}
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Ultimo ciclo paghe</h5>
              <p>Flusso di cassa (Giugno 2024): 72.777€</p>
              <p>Costo azienda (Giugno 2024): 53.674€</p>
              <a href="#" className="btn btn-primary">Dettagli</a>
            </div>
          </div>
        </div>

        {/* Chi è in ferie oggi */}
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Chi è in ferie oggi?</h5>
              <p>Nessuno, tutti presenti!</p>
              <a href="#" className="btn btn-primary">Visualizza il calendario</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
