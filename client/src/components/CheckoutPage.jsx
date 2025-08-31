// client/src/components/CheckoutPage.jsx

import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CheckoutPage.css'; // We will create this CSS file next

const CheckoutPage = () => {
  const { clearCart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Get the total from the state passed by the Link component in CartPage
  const { cartTotal } = location.state || { cartTotal: 0 };
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSimulatedPayment = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a 2-second network request to a payment processor
    setTimeout(() => {
      console.log("Simulated payment processed successfully!");
      setIsLoading(false);
      clearCart(); // Clear the cart after successful "payment"
      navigate('/payment-success'); // Redirect to a success page
    }, 2000); 
  };

  if (cartTotal === 0 && !isLoading) {
    return (
        <div className="checkout-container empty">
            <h2>Your cart is empty.</h2>
            <p>There is nothing to check out.</p>
        </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>₹{cartTotal.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Shipping</span>
          <span>FREE</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <span>₹{cartTotal.toFixed(2)}</span>
        </div>
      </div>

      <form className="payment-form" onSubmit={handleSimulatedPayment}>
        <h3>Simulated Payment</h3>
        <div className="form-group">
            <label htmlFor="card-name">Name on Card</label>
            <input id="card-name" type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input id="card-number" type="text" placeholder="0000 0000 0000 0000" required />
        </div>
        <button type="submit" className="pay-button" disabled={isLoading}>
          {isLoading ? (
            <div className="spinner"></div>
          ) : (
            `Pay ₹${cartTotal.toFixed(2)}`
          )}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;