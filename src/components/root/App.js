import React from 'react';
import Navigation from '../navigation/Navigation';
import Dashboard from './Dashboard';
import CartDetail from '../cart/CartDetail';
import { Container } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Container>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/cart" element={<CartDetail />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
