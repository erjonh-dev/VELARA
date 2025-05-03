import React from 'react';
import { Container } from 'react-bootstrap';
import CalendarComponent from './CalendarComponent';  

const Calendario: React.FC = () => {
  return (
    <Container>
      <h1 className="text-center my-4">Calendario Presenze e Assenze</h1>
      <CalendarComponent />
    </Container>
  );
};

export default Calendario;
