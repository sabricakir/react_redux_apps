import React from 'react';
import Navigation from '../navigation/Navigation';
import Dashboard from './Dashboard';
import CartDetail from '../cart/CartDetail';
import { Container } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import SaveProductApi from '../products/SaveProductApi';
import NotFound from '../common/NotFound';

function App() {
  return (
    <div>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<CartDetail />} />
          <Route path="/products/:id" element={<SaveProductApi />} />
          <Route path="/products" element={<SaveProductApi />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
