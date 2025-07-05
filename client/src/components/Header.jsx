// client/src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(){
  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="logo">E-Shop</Link>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
};
