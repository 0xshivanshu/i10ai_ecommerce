// client/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import ProductDetailPage from './components/ProductDetailPage.jsx';
import CartPage from './components/CartPage.jsx';
import CheckoutPage from './components/CheckoutPage.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route 
            path="/payment-success" 
            element={
              <div style={{ textAlign: 'center', margin: '4rem' }}>
                <h2>Payment Successful!</h2>
                <p>Thank you for your order.</p>
              </div>
            } 
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;