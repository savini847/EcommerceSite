import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import '../App.css';

const AddToCartButton = ({ donut }) => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart(donut);
    setShowPopup(true);
  };

  // Hide popup after 2 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button 
        className="btn btn-primary add-to-cart-btn"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

      {showPopup && (
        <div className="add-to-cart-popup">
          Added "{donut.name}" to cart!
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
