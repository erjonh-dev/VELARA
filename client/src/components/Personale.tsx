import React, { useState } from 'react';

export default function Personale() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Mario Rossi', role: 'Developer', status: 'Attivo', startOfContract: '01/01/2023', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 2, name: 'Luigi Bianchi', role: 'Designer', status: 'Inattivo', startOfContract: '01/06/2022', endOfContract: 'N/A', contractType: 'Dipendente' },
    { id: 3, name: 'Anna Verdi', role: 'HR Manager', status: 'Attivo', startOfContract: '01/03/2021', endOfContract: 'N/A', contractType: 'Amministratore' },
    { id: 4, name: 'Luca Monti', role: 'Intern', status: 'Attivo', startOfContract: '01/06/2024', endOfContract: '01/12/2024', contractType: 'Dipendente' },
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