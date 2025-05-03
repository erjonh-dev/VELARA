import React from 'react';

const CedoliniPagamenti: React.FC = () => {

  const dipendenti = [
    { id: 1, nome: 'Mario Rossi', retribuzione: 3000 },
    { id: 2, nome: 'Luigi Bianchi', retribuzione: 2500 },
    { id: 3, nome: 'Anna Verdi', retribuzione: 3500 },
    { id: 4, nome: 'Luca Monti', retribuzione: 1500 },
    { id: 5, nome: 'Chiara Neri', retribuzione: 2800 },
    { id: 6, nome: 'Alessandro Costa', retribuzione: 3200 },
    { id: 7, nome: 'Federica Gallo', retribuzione: 2400 },
    { id: 8, nome: 'Paolo Ferri', retribuzione: 4000 },
    { id: 9, nome: 'Sara Vitale', retribuzione: 2900 },
    { id: 10, nome: 'Giorgio De Luca', retribuzione: 2600 },
    { id: 11, nome: 'Elisa Greco', retribuzione: 2300 },
    { id: 12, nome: 'Roberto Fontana', retribuzione: 3300 },
    { id: 13, nome: 'Marta Piras', retribuzione: 2700 },
    { id: 14, nome: 'Davide Moretti', retribuzione: 1600 },
    { id: 15, nome: 'Francesca Bianco', retribuzione: 3100 },
    { id: 16, nome: 'Matteo Rinaldi', retribuzione: 2800 },
    { id: 17, nome: 'Ilaria Conti', retribuzione: 2400 },
    { id: 18, nome: 'Simone Marchetti', retribuzione: 3500 },
    { id: 19, nome: 'Laura Esposito', retribuzione: 3200 },
    { id: 20, nome: 'Andrea Testa', retribuzione: 2200 },
    { id: 21, nome: 'Giulia Marchetti', retribuzione: 3700 },
    { id: 22, nome: 'Claudio Ricci', retribuzione: 2900 },
  ];


  const flussoCassa = 70100;
  const costoTotalePersonale = 52200;

  
  const totaleRetribuzioni = dipendenti.reduce((sum, dipendente) => sum + dipendente.retribuzione, 0);

  return (
    <div className="container">
      <h2 className="mb-4">Cedolini e Pagamenti - Maggio 2024</h2>

      
      <div className="mb-4">
        <h4>Riepilogo del mese</h4>
        <div className="row">
          <div className="col-md-4">
            <strong>Mese:</strong> Maggio 2024
          </div>
          <div className="col-md-4">
            <strong>Totale Cedolini:</strong> {flussoCassa}€
          </div>
          <div className="col-md-4">
            <strong>Costo Totale Azienda:</strong> {costoTotalePersonale}€
          </div>
        </div>
      </div>

   
      <div>
        <h4>Retribuzioni dipendenti</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Retribuzione</th>
            </tr>
          </thead>
          <tbody>
            {dipendenti.map((dipendente, index) => (
              <tr key={index}>
                <td>{dipendente.nome}</td>
                <td>{dipendente.retribuzione}€</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      <div className="mt-4">
        <strong>Totale delle Retribuzioni:</strong> {totaleRetribuzioni}€
      </div>
    </div>
  );
};

export default CedoliniPagamenti;
