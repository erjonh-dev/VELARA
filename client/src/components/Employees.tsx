import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Employee {
  _id?: string;
  id?: number;
  name: string;
  role: string;
  status: string;
  startOfContract: string | null;
  endOfContract: string | null;
  contractType: string;
  email?: string;
}

const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString || dateString === 'N/A' || dateString === '—') return '—';

  const date = new Date(dateString);

  if (isNaN(date.getTime())) return '—';

  return date.toLocaleDateString('it-IT');
};

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('User not authenticated. Please log in.');
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(
          'http://localhost:5000/api/employees',
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log('Employees API response:', res.data);
        setEmployees(res.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || err.message);
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) return <p>Loading employees…</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2>Employees List</h2>

      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Contract Type</th>
            </tr>
          </thead>

          <tbody>
            {employees.map(emp => (
              <tr key={emp._id ?? emp.id}>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.status}</td>
                <td>{formatDate(emp.startOfContract)}</td>
                <td>{formatDate(emp.endOfContract)}</td>
                <td>{emp.contractType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Employees;
  