import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Personale() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Mario Rossi', role: 'Developer', status: 'Attivo', startOfContract: '01/01/2023', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 2, name: 'Luigi Bianchi', role: 'Designer', status: 'Inattivo', startOfContract: '01/06/2022', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 3, name: 'Anna Verdi', role: 'HR Manager', status: 'Attivo', startOfContract: '01/03/2021', endOfContract: 'N/A', contractType: 'Amministratore' },
    { id: 4, name: 'Luca Monti', role: 'Intern', status: 'Attivo', startOfContract: '01/06/2024', endOfContract: '01/12/2024', contractType: 'Dipendente' },
    { id: 5, name: 'Chiara Neri', role: 'Accountant', status: 'Attivo', startOfContract: '15/04/2023', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 6, name: 'Alessandro Costa', role: 'Developer', status: 'Attivo', startOfContract: '20/02/2022', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 7, name: 'Federica Gallo', role: 'Designer', status: 'Inattivo', startOfContract: '10/09/2021', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 8, name: 'Paolo Ferri', role: 'Project Manager', status: 'Attivo', startOfContract: '01/11/2020', endOfContract: 'N/A', contractType: 'Amministratore' },
    { id: 9, name: 'Sara Vitale', role: 'Marketing Specialist', status: 'Attivo', startOfContract: '05/07/2022', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 10, name: 'Giorgio De Luca', role: 'Developer', status: 'Inattivo', startOfContract: '08/08/2020', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 11, name: 'Elisa Greco', role: 'HR Assistant', status: 'Attivo', startOfContract: '22/03/2023', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 12, name: 'Roberto Fontana', role: 'System Administrator', status: 'Attivo', startOfContract: '15/05/2021', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 13, name: 'Marta Piras', role: 'Content Creator', status: 'Attivo', startOfContract: '01/02/2024', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 14, name: 'Davide Moretti', role: 'Intern', status: 'Attivo', startOfContract: '01/07/2024', endOfContract: '31/12/2024', contractType: 'Dipendente' },
    { id: 15, name: 'Francesca Bianco', role: 'UX Researcher', status: 'Attivo', startOfContract: '01/09/2022', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 16, name: 'Matteo Rinaldi', role: 'Sales Manager', status: 'Inattivo', startOfContract: '10/01/2019', endOfContract: '31/12/2023', contractType: 'Dipendente' },
    { id: 17, name: 'Ilaria Conti', role: 'Customer Support', status: 'Attivo', startOfContract: '12/04/2023', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 18, name: 'Simone Marchetti', role: 'Legal Advisor', status: 'Attivo', startOfContract: '15/06/2021', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 19, name: 'Laura Esposito', role: 'Recruiter', status: 'Attivo', startOfContract: '09/10/2022', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 20, name: 'Andrea Testa', role: 'Data Analyst', status: 'Inattivo', startOfContract: '01/03/2020', endOfContract: '31/12/2023', contractType: 'Dipendente' },
    { id: 21, name: 'Giulia Marchetti', role: 'Product Owner', status: 'Attivo', startOfContract: '01/05/2022', endOfContract: 'N/A', contractType: 'Amministratore' },
    { id: 22, name: 'Claudio Ricci', role: 'Security Officer', status: 'Attivo', startOfContract: '01/11/2023', endOfContract: 'N/A', contractType: 'Dipendente' },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    role: '',
    status: 'Attivo',
    startOfContract: '',
    endOfContract: '',
    contractType: 'Dipendente',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [filterContractType, setFilterContractType] = useState('');

  // Aggiungi dipendente
  const handleAddEmployee = () => {
    if (newEmployee.name && newEmployee.role) {
      setEmployees([...employees, { id: employees.length + 1, ...newEmployee }]);
      setNewEmployee({ name: '', role: '', status: 'Attivo', startOfContract: '', endOfContract: '', contractType: 'Dipendente' });
    }
  };

  // Filtra dipendenti
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole ? emp.role.toLowerCase().includes(filterRole.toLowerCase()) : true;
    const matchesContractType = filterContractType ? emp.contractType === filterContractType : true;
    return matchesSearch && matchesRole && matchesContractType;
  });

  return (
    <div className="container mt-4">
      <h2>Elenco Dipendenti</h2>

      {/* Barra di ricerca */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Cerca dipendente per nome"
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filtra per mansione */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Filtra per mansione"
          className="form-control"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        />
      </div>

      {/* Filtra per tipo di contratto */}
      <div className="mb-3">
        <select
          className="form-control"
          value={filterContractType}
          onChange={(e) => setFilterContractType(e.target.value)}
        >
          <option value="">Tutti i contratti</option>
          <option value="Dipendente">Dipendente</option>
          <option value="Amministratore">Amministratore</option>
        </select>
      </div>

      {/* Tabella dipendenti */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Mansione</th>
            <th>Stato</th>
            <th>Inizio Contratto</th>
            <th>Fine Contratto</th>
            <th>Tipo Contratto</th>
            <th>Documenti</th> {/* Aggiunto link ai documenti */}
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.status}</td>
              <td>{employee.startOfContract || '-'}</td>
              <td>{employee.endOfContract || '-'}</td>
              <td>{employee.contractType}</td>
              <td>
                {/* Link ai documenti del dipendente */}
                <Link to={`/documenti/${employee.id}`} className="btn btn-primary">
                  Visualizza Cedolino
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="mt-4">Aggiungi Dipendente</h3>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Nome"
          className="form-control"
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Mansione"
          className="form-control"
          value={newEmployee.role}
          onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <select
          className="form-control"
          value={newEmployee.status}
          onChange={(e) => setNewEmployee({ ...newEmployee, status: e.target.value })}
        >
          <option value="Attivo">Attivo</option>
          <option value="Inattivo">Inattivo</option>
        </select>
      </div>
      <div className="mb-3">
        <input
          type="date"
          placeholder="Inizio Contratto"
          className="form-control"
          value={newEmployee.startOfContract}
          onChange={(e) => setNewEmployee({ ...newEmployee, startOfContract: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <input
          type="date"
          placeholder="Fine Contratto"
          className="form-control"
          value={newEmployee.endOfContract}
          onChange={(e) => setNewEmployee({ ...newEmployee, endOfContract: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <select
          className="form-control"
          value={newEmployee.contractType}
          onChange={(e) => setNewEmployee({ ...newEmployee, contractType: e.target.value })}
        >
          <option value="Dipendente">Dipendente</option>
          <option value="Amministratore">Amministratore</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleAddEmployee}>
        Aggiungi
      </button>
    </div>
  );
}

