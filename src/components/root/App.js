import React from 'react';
import Navigation from '../navigation/Navigation';
import Dashboard from './Dashboard';
import { Container } from 'reactstrap';

function App() {
  return (
    <div>
      <Container>
        <Navigation />
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
