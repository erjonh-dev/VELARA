    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';

    export default function Personnel() {
      const [employees, setEmployees] = useState([
        { id: 1, name: 'Mario Rossi', role: 'Developer', status: 'Active', startOfContract: '01/01/2023', endOfContract: 'N/A', contractType: 'Employee' },
        { id: 2, name: 'Luigi Bianchi', role: 'Designer', status: 'Inactive', startOfContract: '01/06/2022', endOfContract: 'N/A', contractType: 'Employee' },
        { id: 3, name: 'Anna Verdi', role: 'HR Manager', status: 'Active', startOfContract: '01/03/2021', endOfContract: 'N/A', contractType: 'Administrator' },
        { id: 4, name: 'Luca Monti', role: 'Intern', status: 'Active', startOfContract: '01/06/2024', endOfContract: '01/12/2024', contractType: 'Employee' },
        { id: 5, name: 'Chiara Neri', role: 'Accountant', status: 'Active', startOfContract: '15/04/2023', endOfContract: 'N/A', contractType: 'Employee' },
        { id: 6, name: 'Alessandro Costa', role: 'Developer', status: 'Active', startOfContract: '20/02/2022', endOfContract: 'N/A', contractType: 'Employee' },
        { id: 7, name: 'Federica Gallo', role: 'Designer', status: 'Inactive', startOfContract: '10/09/2021', endOfContract: 'N/A', contractType: 'Employee' },
        { id: 8, name: 'Paolo Ferri', role: 'Project Manager', status: 'Active', startOfContract: '01/11/2020', endOfContract: 'N/A', contractType: 'Administrator' },
        { id: 9, name: 'Sara Vitale', role: 'Marketing Specialist', status: 'Active', startOfContract: '05/07/2022', endOfContract: 'N/A', contractType: 'Employee' },
        { id: 10, name: 'Giorgio De Luca', role: 'Developer', status: 'Inactive', startOfContract: '08/08/2020', endOfContract: 'N/A', contractType: 'Employee' },
        { id: 11, name: 'Elisa Greco', role: 'HR Assistant', status: 'Active', startOfContract: '22/03/2023', endOfContract: 'N/A', contractType: 'Employee' },
        { id: 12, name: 'Roberto Fontana', role: 'System Administrator', status: 'Active', startOfContract: '15/05/2021', endOfContract: 'N/A', contractType: 'Employee' },
        { id: 13, name: 'Marta Piras', role: 'Content Creator', status: 'Active', startOfContract: '01/02/2024', endOfContract: 'N/A', contractType: 'Employee' },
        { id: 14, name: 'Davide Moretti', role: 'Intern', status: 'Active', startOfContract: '01/07/2024', endOfContract: '31/12/2024', contractType: 'Employee' },
        { id: 15, name: 'Francesca Bianco', role: 'UX Researcher', status: 'Active', startOfContract: '01/09/2022', endOfContract: 'N/A', contractType: 'Employee' },
        { id: 16, name: 'Matteo Rinaldi', role: 'Sales Manager', status: 'Inactive', startOfContract: '10/01/2019', endOfContract: '31/12/2023', contractType: 'Employee' },
        { id: 17, name: 'Ilaria Conti', role: 'Customer Support', status: 'Active', startOfContract: '12/04/2023', endOfContract: 'N/A', contractType: 'Employee' },
        { id: 18, name: 'Simone Marchetti', role: 'Legal Advisor', status: 'Active', startOfContract: '15/06/2021', endOfContract: 'N/A', contractType: 'Employee' },
        { id: 19, name: 'Laura Esposito', role: 'Recruiter', status: 'Active', startOfContract: '09/10/2022', endOfContract: 'N/A', contractType: 'Employee' },
        { id: 20, name: 'Andrea Testa', role: 'Data Analyst', status: 'Inactive', startOfContract: '01/03/2020', endOfContract: '31/12/2023', contractType: 'Employee' },
        { id: 21, name: 'Giulia Marchetti', role: 'Product Owner', status: 'Active', startOfContract: '01/05/2022', endOfContract: 'N/A', contractType: 'Administrator' },
        { id: 22, name: 'Claudio Ricci', role: 'Security Officer', status: 'Active', startOfContract: '01/11/2023', endOfContract: 'N/A', contractType: 'Employee' },
      ]);

      const [newEmployee, setNewEmployee] = useState({
        name: '',
        role: '',
        status: 'Active',
        startOfContract: '',
        endOfContract: '',
        contractType: 'Employee',
      });

      const [searchTerm, setSearchTerm] = useState('');
      const [filterRole, setFilterRole] = useState('');
      const [filterContractType, setFilterContractType] = useState('');

      const handleAddEmployee = () => {
        if (newEmployee.name && newEmployee.role) {
          setEmployees([...employees, { id: employees.length + 1, ...newEmployee }]);
          setNewEmployee({ name: '', role: '', status: 'Active', startOfContract: '', endOfContract: '', contractType: 'Employee' });
        }
      };

      const filteredEmployees = employees.filter((emp) => {
        const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole ? emp.role.toLowerCase().includes(filterRole.toLowerCase()) : true;
        const matchesContractType = filterContractType ? emp.contractType === filterContractType : true;
        return matchesSearch && matchesRole && matchesContractType;
      });

      return (
        <div className="container mt-4">
          <h2>Employee List</h2>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Search employee by name"
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Filter by role"
              className="form-control"
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <select
              className="form-control"
              value={filterContractType}
              onChange={(e) => setFilterContractType(e.target.value)}
            >
              <option value="">All contracts</option>
              <option value="Employee">Employee</option>
              <option value="Administrator">Administrator</option>
            </select>
          </div>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Contract Start</th>
                <th>Contract End</th>
                <th>Contract Type</th>
                <th>Documents</th>
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
                    <Link to={`/documents/${employee.id}`} className="btn btn-primary">
                      View Payslip
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="mt-4">Add Employee</h3>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={newEmployee.name}
              onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Role"
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
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="date"
              placeholder="Contract Start"
              className="form-control"
              value={newEmployee.startOfContract}
              onChange={(e) => setNewEmployee({ ...newEmployee, startOfContract: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              placeholder="Contract End"
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
              <option value="Employee">Employee</option>
              <option value="Administrator">Administrator</option>;
            </select>
          </div>
          <button className="btn btn-primary" onClick={handleAddEmployee}>
            Add
          </button>
        </div>
      );
    }
