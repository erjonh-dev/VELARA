import React from 'react';

const PayslipsAndPayments: React.FC = () => {
  const employees = [
    { id: 1, name: 'Mario Rossi', salary: 3000 },
    { id: 2, name: 'Luigi Bianchi', salary: 2500 },
    { id: 3, name: 'Anna Verdi', salary: 3500 },
    { id: 4, name: 'Luca Monti', salary: 1500 },
    { id: 5, name: 'Chiara Neri', salary: 2800 },
    { id: 6, name: 'Alessandro Costa', salary: 3200 },
    { id: 7, name: 'Federica Gallo', salary: 2400 },
    { id: 8, name: 'Paolo Ferri', salary: 4000 },
    { id: 9, name: 'Sara Vitale', salary: 2900 },
    { id: 10, name: 'Giorgio De Luca', salary: 2600 },
    { id: 11, name: 'Elisa Greco', salary: 2300 },
    { id: 12, name: 'Roberto Fontana', salary: 3300 },
    { id: 13, name: 'Marta Piras', salary: 2700 },
    { id: 14, name: 'Davide Moretti', salary: 1600 },
    { id: 15, name: 'Francesca Bianco', salary: 3100 },
    { id: 16, name: 'Matteo Rinaldi', salary: 2800 },
    { id: 17, name: 'Ilaria Conti', salary: 2400 },
    { id: 18, name: 'Simone Marchetti', salary: 3500 },
    { id: 19, name: 'Laura Esposito', salary: 3200 },
    { id: 20, name: 'Andrea Testa', salary: 2200 },
    { id: 21, name: 'Giulia Marchetti', salary: 3700 },
    { id: 22, name: 'Claudio Ricci', salary: 2900 },
  ];

  const cashFlow = 70100;
  const totalCompanyCost = 52200;

  const totalSalaries = employees.reduce((sum, employee) => sum + employee.salary, 0);

  return (
    <div className="container">
      <h2 className="mb-4">Payslips and Payments - May 2024</h2>

      <div className="mb-4">
        <h4>Monthly Summary</h4>
        <div className="row">
          <div className="col-md-4">
            <strong>Month:</strong> May 2024
          </div>
          <div className="col-md-4">
            <strong>Total Payslips:</strong> {cashFlow}€
          </div>
          <div className="col-md-4">
            <strong>Total Company Cost:</strong> {totalCompanyCost}€
          </div>
        </div>
      </div>

      <div>
        <h4>Employee Salaries</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.salary}€</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <strong>Total Salaries:</strong> {totalSalaries}€
      </div>
    </div>
  );
};

export default PayslipsAndPayments;
