import React from 'react';
import { useCart } from '../context/CartContext';
import '../App.css';

const AddToCartButton = ({ donut }) => {
  const { addToCart } = useCart();

  return (
    <button 
      className="btn btn-primary add-to-cart-btn"
      onClick={() => addToCart(donut)}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;