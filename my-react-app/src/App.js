import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import DonutGrid from './components/DonutGrid';
import DonutDetail from './components/DonutDetail';
import CategoryPage from './components/CategoryPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/donuts" element={<DonutGrid />} /> 
        <Route path="/donut/:id" element={<DonutDetail />} />
        <Route path="/category/:tag" element={<CategoryPage />} />

      </Routes>
    </Router>
  );
};

export default App;

