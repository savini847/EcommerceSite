// src/components/DonutGrid.js

import React from 'react';
import DonutCard from './DonutCard';

const DonutGrid = ({ donuts }) => {
  return (
    <div style={styles.gridContainer}>
      {donuts.map(donut => (
        <DonutCard key={donut.id} donut={donut} />
      ))}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  }
};

export default DonutGrid;
