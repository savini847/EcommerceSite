import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setOrderSuccess(true);
      if (clearCart && typeof clearCart === 'function') {
        clearCart();
      }
    }, 2000);
  };

  if (orderSuccess) {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="alert alert-success">
              <h4 className="alert-heading">Order Successful!</h4>
              <p>Thank you for your purchase. Your donuts are on their way!</p>
              <button 
                className="btn btn-primary mt-3"
                onClick={() => navigate('/')}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0 && !orderSuccess) {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="alert alert-warning">
              <h4 className="alert-heading">Your cart is empty</h4>
              <p>Add some delicious donuts to your cart before checking out.</p>
              <button 
                className="btn btn-primary mt-3"
                onClick={() => navigate('/')}
              >
                Browse Donuts
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <h2 className="mb-4">Checkout</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h5>Shipping Information</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="address" 
                    name="address" 
                    value={formData.address}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="city" 
                      name="city" 
                      value={formData.city}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="zipCode" className="form-label">Zip Code</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="zipCode" 
                      name="zipCode" 
                      value={formData.zipCode}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-light">
                <h5>Payment Information</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <div className="form-control bg-light">
                    <span className="text-muted">•••• •••• •••• 4242</span>
                  </div>
                  <small className="text-muted">Test card number displayed for demo purposes</small>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Expiry Date</label>
                    <div className="form-control bg-light">
                      <span className="text-muted">04/24</span>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">CVV</label>
                    <div className="form-control bg-light">
                      <span className="text-muted">•••</span>
                    </div>
                  </div>
                </div>
                <div className="alert alert-info mt-3">
                  <i className="bi bi-info-circle me-2"></i>
                  This is a demo store. No real payments are processed.
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary w-100 py-3"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : `Pay $${cartTotal.toFixed(2)}`}
            </button>
          </form>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-light">
              <h5>Order Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {cart.map(item => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <h6>{item.name}</h6>
                      <small className="text-muted">Qty: {item.quantity}</small>
                    </div>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-between mt-3">
                <h5>Total:</h5>
                <h5>${cartTotal.toFixed(2)}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;