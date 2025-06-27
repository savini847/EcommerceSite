// src/components/DonutCard.js

import React from 'react';

const DonutCard = ({ donut }) => {
  return (
    <div style={styles.card}>
      <img src={donut.image} alt={donut.name} style={styles.image} />
      <h3>{donut.name || "No Name"}</h3>
      <p>{donut.description || "No description available."}</p>
      <p style={styles.price}>${donut.price.toFixed(2)}</p>
      <p><small>Tags: {donut.tags.join(", ")}</small></p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    width: 250,
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
    backgroundColor: 'pink',
  },
  image: {
    maxWidth: '100%',
    height: 150,
    objectFit: 'cover',
    borderRadius: 8,
    marginBottom: 12,
  },
  price: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: '1.1rem',
  }
};

export default DonutCard;
