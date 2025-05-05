import React from 'react';
import { Container } from 'react-bootstrap';
import CalendarComponent from './CalendarComponent';  

const Calendar: React.FC = () => {
  return (
    <Container>
      <h1 className="text-center my-4">Attendance and Absence Calendar</h1>
      <CalendarComponent />
    </Container>
  );
};

export default Calendar;
