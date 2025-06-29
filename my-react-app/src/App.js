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
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import SearchPage from './components/SearchPage'; 

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <Cart />
          <main className="flex-grow-1" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
            <div className="container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/donuts" element={<DonutGrid />} />
                <Route path="/donut/:id" element={<DonutDetail />} />
                <Route path="/category/:tag" element={<CategoryPage />} />
                <Route path="/search" element={<SearchPage />} /> 
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
