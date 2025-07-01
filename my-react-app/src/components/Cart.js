import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { 
    cart, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();
  
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-sidebar">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="btn btn-close" onClick={toggleCart}></button>
        </div>
        
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul className="list-group">
              {cart.map(item => (
                <li key={item.id} className="list-group-item">
                  <div className="d-flex align-items-center mb-2">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ width: '60px', height: '60px', objectFit: 'contain', marginRight: '15px' }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.name}</h6>
                      <p className="mb-1">${item.price.toFixed(2)} each</p>
                      <div className="d-flex align-items-center">
                        <button 
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button 
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= 6}
                        >
                          +
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-danger ms-2"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                    <div className="text-end">
                      <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="cart-footer">
          <div className="d-flex justify-content-between mb-2">
            <h5>Subtotal:</h5>
            <h5>${cartTotal.toFixed(2)}</h5>
          </div>
          <button 
            className="btn btn-primary w-100 mt-2"
            onClick={() => {
              toggleCart();
              navigate('/checkout');
            }}
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;