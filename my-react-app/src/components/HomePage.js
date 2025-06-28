import React from 'react';
import SeasonalCarousel from './SeasonalCarousel';
import DonutCarousel from './DonutCarousel';

const HomePage = () => {
  return (
    <>
      <SeasonalCarousel />

      <div className="container mt-5">
        <h2 className="text-center mb-4">Check Out Our Bestsellers!</h2>
        <DonutCarousel currentId={-1} tag="Bestsellers" />
      </div>

    </>
  );
};

export default HomePage;
