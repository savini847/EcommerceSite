import React from 'react';
import DonutCard from './DonutCard';
import allDonuts from './Donuts';

const DonutGrid = ({ donuts }) => {
  const donutsToShow = donuts || allDonuts;

  return (
    <div className="container py-4">
      <div className="row g-4 justify-content-center">
        {donutsToShow.map(donut => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={donut.id}>
            <DonutCard donut={donut} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutGrid;
