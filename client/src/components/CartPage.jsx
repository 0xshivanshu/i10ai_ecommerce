// client/src/components/CartPage.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import './CartPage.css';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items-list">
        {cartItems.map(item => (
          <div key={item._id} className="cart-item">
            <img src={item.imageURL} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h2 className="cart-item-title">{item.title}</h2>
              <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-quantity">
              <p>Qty: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2 className="cart-total-price">Total: ₹{totalPrice.toFixed(2)}</h2>
        <Link
          to="/checkout"
          state={{ cartTotal: totalPrice }} // Pass the total price to the checkout page
          className="checkout-button"
          style={{ textDecoration: 'none', textAlign: 'center' }} // Optional: for button-like styling
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;