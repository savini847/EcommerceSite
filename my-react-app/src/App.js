// src/App.js

import React from 'react';
import donuts from './components/Donuts';  // Import the donuts data
import DonutGrid from './components/DonutGrid';

function App() {
  return (
    <div>
      <header style={styles.header}>
        <h1>Donut Shop</h1>
      </header>
      <DonutGrid donuts={donuts} />
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#ff6f61',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  }
};

export default App;
