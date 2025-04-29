import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image from '../assets/image.png'; 

export default function Home() {
  return (
    <div >
      {/* Navbar */}
      <Navbar />

      {/* Contenuto principale */}
      <div className="container text-center py-5">
        <h1 className="display-4 text-primary mb-4">Velara: Il nuovo modo di assumere, gestire e pagare il personale</h1>
        <p className="lead mb-4">
          Automatizza i processi HR e semplifica il pagamento degli stipendi, affiancato da un Consulente del Lavoro dedicato.
        </p>
        <a href="/signup" className="btn btn-success btn-lg">
          Prova Velara
        </a>
      </div>

      <div className="container py-5">
  <div className="row">
    {/* Card 1 - Assumi */}
    <div className="col-md-4">
      <div className="card velara-card border-0 h-100 hover-card">
        <div className="card-body text-center">
          {/* Emoji sopra il testo */}
          <h5 className="card-title">
            <span className="d-block" style={{ fontSize: '3rem' }}>👥</span>
            Assumi
          </h5>
          <p className="card-text">
            Gestisci assunzioni e simulazioni dei costi in modo semplice e veloce.
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 - Paga */}
    <div className="col-md-4">
      <div className="card velara-card border-0 h-100 hover-card">
        <div className="card-body text-center">
          {/* Emoji sopra il testo */}
          <h5 className="card-title">
            <span className="d-block" style={{ fontSize: '3rem' }}>💰</span>
            Paga
          </h5>
          <p className="card-text">
            Automatizza la gestione di cedolini e stipendi con facilità.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3 - Gestisci */}
    <div className="col-md-4">
      <div className="card velara-card  border-0 h-100 hover-card">
        <div className="card-body text-center">
          {/* Emoji sopra il testo */}
          <h5 className="card-title">
            <span className="d-block" style={{ fontSize: '3rem' }}>🗂️</span>
            Gestisci
          </h5>
          <p className="card-text">
            Organizza ferie, permessi, e molto altro con un clic.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

     {/* Nuova sezione */}
      <div className="container-fluid py-5">
        <div className="container velara-highlight-box text-center">
          <h2 className="mb-4">Perché scegliere Velara?</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <ul className="list-unstyled text-start">
                <li className="mb-3">✔ Automatizza i processi HR</li>
                <li className="mb-3">✔ Gestione semplificata di stipendi e cedolini</li>
                <li className="mb-3">✔ Affiancamento di un consulente del lavoro</li>
                <li className="mb-3">✔ Soluzioni personalizzate per ogni azienda</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src={image}
                alt="Screenshot Placeholder"
                className="img-fluid rounded"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
              />
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
}
