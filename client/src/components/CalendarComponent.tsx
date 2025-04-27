import React, { useState } from 'react';
import '../styles/CalendarComponent.css';

interface Employee {
  id: number;
  name: string;
}

const employees: Employee[] = [
  { id: 1, name: 'Mario Rossi' },
  { id: 2, name: 'Luigi Bianchi' },
  { id: 3, name: 'Anna Verdi' },
  { id: 4, name: 'Luca Monti' },
  { id: 5, name: 'Chiara Neri' },
  { id: 6, name: 'Alessandro Costa' },
  { id: 7, name: 'Federica Gallo' },
  { id: 8, name: 'Paolo Ferri' },
  { id: 9, name: 'Sara Vitale' },
  { id: 10, name: 'Giorgio De Luca' },
  { id: 11, name: 'Elisa Greco' },
  { id: 12, name: 'Roberto Fontana' },
  { id: 13, name: 'Marta Piras' },
  { id: 14, name: 'Davide Moretti' },
  { id: 15, name: 'Francesca Bianco' },
  { id: 16, name: 'Matteo Rinaldi' },
  { id: 17, name: 'Ilaria Conti' },
  { id: 18, name: 'Simone Marchetti' },
  { id: 19, name: 'Laura Esposito' },
  { id: 20, name: 'Andrea Testa' },
  { id: 21, name: 'Giulia Marchetti' },
  { id: 22, name: 'Claudio Ricci' }
];

type DayStatus = 'presenza' | 'assenza' | 'ferie' | 'malattia' | null;

const generateMonthDays = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  const days: number[] = [];
  while (date.getMonth() === month) {
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const CalendarComponent: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  const [attendance, setAttendance] = useState<{ [employeeId: number]: { [day: number]: DayStatus } }>({});

  const daysInMonth = generateMonthDays(currentYear, currentMonth);

  const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    if (currentMonth === 0) setCurrentYear((prevYear) => prevYear - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    if (currentMonth === 11) setCurrentYear((prevYear) => prevYear + 1);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentMonth(parseInt(event.target.value));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentYear(parseInt(event.target.value));
  };

  const handleCellClick = (employeeId: number, day: number) => {
    const currentStatus = attendance[employeeId]?.[day] || null;
    let nextStatus: DayStatus;

    if (currentStatus === null) {
      nextStatus = 'presenza';
    } else if (currentStatus === 'presenza') {
      nextStatus = 'assenza';
    } else if (currentStatus === 'assenza') {
      nextStatus = 'ferie';
    } else if (currentStatus === 'ferie') {
      nextStatus = 'malattia';
    } else {
      nextStatus = null;  // Ritornare a "vuoto"
    }

    const updatedAttendance = { ...attendance };
    if (!updatedAttendance[employeeId]) {
      updatedAttendance[employeeId] = {};
    }
    updatedAttendance[employeeId][day] = nextStatus;
    setAttendance(updatedAttendance);
  };

  const months = [
    'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
  ];

  return (
    <div className="calendar-container">
      {/* Mese e anno sopra la tabella */}
      <div className="calendar-header">
        <button className="nav-button" onClick={handlePreviousMonth}>
          {'<'}
        </button>
        
        <div className="month-year-selector">
          <select 
            value={currentMonth} 
            onChange={handleMonthChange} 
            className="month-select"
          >
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
          <input 
            type="number" 
            value={currentYear} 
            onChange={handleYearChange} 
            className="year-input" 
            min="1900" 
          />
        </div>

        <button className="nav-button" onClick={handleNextMonth}>
          {'>'}
        </button>
      </div>

      <div className="calendar-table">
        {/* Intestazione: Nome + Giorni */}
        <div className="calendar-row header">
          <div className="calendar-cell name-header">Nome</div>
          {daysInMonth.map((day) => (
            <div key={day} className="calendar-cell day-header">{day}</div>
          ))}
        </div>

        {/* Dipendenti */}
        {employees.map((employee) => (
          <div className="calendar-row" key={employee.id}>
            <div className="calendar-cell name-cell">{employee.name}</div>

            {daysInMonth.map((day) => {
              const currentStatus = attendance[employee.id]?.[day] || null;
              return (
                <div 
                  key={day} 
                  className={`calendar-cell day-cell ${currentStatus || ''}`}
                  onClick={() => handleCellClick(employee.id, day)}
                >
                  <div className="status-indicator">
                    {currentStatus === 'presenza' && <span className="status-icon presence">✔️</span>}
                    {currentStatus === 'assenza' && <span className="status-icon absence">❌</span>}
                    {currentStatus === 'ferie' && <span className="status-icon holiday">🌴</span>}
                    {currentStatus === 'malattia' && <span className="status-icon sick">🤒</span>}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;
