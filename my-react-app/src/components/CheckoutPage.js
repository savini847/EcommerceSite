import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const Stepper = ({ currentStep }) => {
  const steps = [
    { id: 1, name: 'Personal Information' },
    { id: 2, name: 'Shipping Address' },
    { id: 3, name: 'Payment' },
    { id: 4, name: 'Confirmation' }
  ];

  return (
    <div className="stepper-wrapper mb-5">
      <div className="stepper d-flex justify-content-between">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className={`stepper-step ${currentStep >= step.id ? 'active' : ''}`}
          >
            <div className="stepper-circle">
              {step.id}
            </div>
            <div className="stepper-label">{step.name}</div>
            {index < steps.length - 1 && (
              <div className="stepper-line"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [surveyAnswers, setSurveyAnswers] = useState({
    siteEase: '',
    siteDesign: '',
    siteSpeed: '',
    productQuality: '',
    productVariety: '',
    productPackaging: ''
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSurveyChange = (e) => {
    const { name, value } = e.target;
    setSurveyAnswers(prev => ({
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
      setCurrentStep(4);
      if (clearCart && typeof clearCart === 'function') {
        clearCart();
      }
    }, 2000);
  };

  const handleSurveySubmit = (e) => {
    e.preventDefault();
    setSurveyCompleted(true);
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      navigate('/');
    }, 5000);
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  if (showConfetti) {
    return (
      <>
        <Confetti 
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
        />
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <div className="alert alert-success">
                <h4 className="alert-heading">Thank You!</h4>
                <p>We appreciate your feedback. Enjoy your donuts!</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (surveyCompleted) {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="alert alert-success">
              <h4 className="alert-heading">Thank You!</h4>
              <p>We appreciate your feedback. Enjoy your donuts!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showSurvey) {
    return (
      <div className="container my-5">
        <Stepper currentStep={4} />
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card checkout-card">
              <div className="card-header bg-light">
                <h3>Customer Satisfaction Survey</h3>
                <p className="mb-0">We'd love to hear about your experience!</p>
              </div>
              <div className="card-body">
                <form onSubmit={handleSurveySubmit}>
                  <div className="mb-4">
                    <h5 className="text-pink">Website Experience</h5>
                    <div className="mb-3">
                      <label className="form-label">How easy was it to navigate our website?</label>
                      <select 
                        className="form-select"
                        name="siteEase"
                        value={surveyAnswers.siteEase}
                        onChange={handleSurveyChange}
                        required
                      >
                        <option value="">Select rating</option>
                        <option value="5">Very Easy</option>
                        <option value="4">Easy</option>
                        <option value="3">Neutral</option>
                        <option value="2">Difficult</option>
                        <option value="1">Very Difficult</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">How would you rate the design of our website?</label>
                      <select 
                        className="form-select"
                        name="siteDesign"
                        value={surveyAnswers.siteDesign}
                        onChange={handleSurveyChange}
                        required
                      >
                        <option value="">Select rating</option>
                        <option value="5">Excellent</option>
                        <option value="4">Good</option>
                        <option value="3">Average</option>
                        <option value="2">Below Average</option>
                        <option value="1">Poor</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">How would you rate the speed of our website?</label>
                      <select 
                        className="form-select"
                        name="siteSpeed"
                        value={surveyAnswers.siteSpeed}
                        onChange={handleSurveyChange}
                        required
                      >
                        <option value="">Select rating</option>
                        <option value="5">Very Fast</option>
                        <option value="4">Fast</option>
                        <option value="3">Average</option>
                        <option value="2">Slow</option>
                        <option value="1">Very Slow</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-pink">Product Experience</h5>
                    <div className="mb-3">
                      <label className="form-label">How would you rate the quality of our donuts?</label>
                      <select 
                        className="form-select"
                        name="productQuality"
                        value={surveyAnswers.productQuality}
                        onChange={handleSurveyChange}
                        required
                      >
                        <option value="">Select rating</option>
                        <option value="5">Excellent</option>
                        <option value="4">Good</option>
                        <option value="3">Average</option>
                        <option value="2">Below Average</option>
                        <option value="1">Poor</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">How would you rate our product variety?</label>
                      <select 
                        className="form-select"
                        name="productVariety"
                        value={surveyAnswers.productVariety}
                        onChange={handleSurveyChange}
                        required
                      >
                        <option value="">Select rating</option>
                        <option value="5">Excellent</option>
                        <option value="4">Good</option>
                        <option value="3">Average</option>
                        <option value="2">Below Average</option>
                        <option value="1">Poor</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">How would you rate our product packaging?</label>
                      <select 
                        className="form-select"
                        name="productPackaging"
                        value={surveyAnswers.productPackaging}
                        onChange={handleSurveyChange}
                        required
                      >
                        <option value="">Select rating</option>
                        <option value="5">Excellent</option>
                        <option value="4">Good</option>
                        <option value="3">Average</option>
                        <option value="2">Below Average</option>
                        <option value="1">Poor</option>
                      </select>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary"
                      onClick={() => setShowSurvey(false)}
                    >
                      Back to Order
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                    >
                      Submit Survey
                    </button>
                  </div>
                </form>
              </div>
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
      <Stepper currentStep={currentStep} />
      
      <div className="row">
        <div className="col-md-8">
          {currentStep === 1 && (
            <div className="card mb-4 checkout-card">
              <div className="card-header bg-light">
                <h5>Personal Information</h5>
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
                <div className="d-flex justify-content-end">
                  <button 
                    className="btn btn-primary"
                    onClick={nextStep}
                    disabled={!formData.name || !formData.email}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="card mb-4 checkout-card">
              <div className="card-header bg-light">
                <h5>Shipping Address</h5>
              </div>
              <div className="card-body">
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
                <div className="d-flex justify-content-between">
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={nextStep}
                    disabled={!formData.address || !formData.city || !formData.zipCode}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <form onSubmit={handleSubmit}>
              <div className="card mb-4 checkout-card">
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
              
              <div className="d-flex justify-content-between">
                <button 
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={prevStep}
                >
                  Back
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : `Pay $${cartTotal.toFixed(2)}`}
                </button>
              </div>
            </form>
          )}

{currentStep === 4 && (
  <div className = "order-success-card">
    <div className="card checkout-card" style={{ maxWidth: '600px', width: '100%' }}>
      <div className="card-body text-center">
        <div className="alert alert-success">
          <h4 className="alert-heading">Order Successful!</h4>
          <p>Thank you for your purchase. Your donuts are on their way!</p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => setShowSurvey(true)}
          >
            Take Our Survey
          </button>
          <button
            className="btn btn-outline-secondary mt-3 ms-2"
            onClick={() => navigate('/')}
          >
            Skip Survey
          </button>
        </div>
      </div>
    </div>
  </div>
)}

          </div>   
        
        {currentStep !==4 && (
          <div className="col-md-4">
            <div className="card checkout-card">
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
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;