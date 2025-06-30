import React, { useState } from 'react';
import DonutCard from './DonutCard';
import allDonuts from './Donuts';
import Filter from './Filter';

const DonutGrid = ({ donuts }) => {
  const allDonutsList = donuts || allDonuts;

  const [filteredDonuts, setFilteredDonuts] = useState(allDonutsList);

  const handleFilterChange = ({ filteredDonuts }) => {
    setFilteredDonuts(filteredDonuts);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex">
        {/* Filter menu on the left */}
        <Filter donuts={allDonutsList} onFilterChange={handleFilterChange} />

        <div className="flex-grow-1 ms-4">
          {/* Dynamic text showing number of results */}
          <div className="mb-3">
            <h5>
              See {filteredDonuts.length} result{filteredDonuts.length !== 1 ? 's' : ''} 🍩
            </h5>
          </div>

          <div className="row g-4 justify-content-center">
            {filteredDonuts.length > 0 ? (
              filteredDonuts.map((donut) => (
                <div key={donut.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <DonutCard donut={donut} />
                </div>
              ))
            ) : (
              <p className="text-center">No donuts match your filters.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutGrid;
