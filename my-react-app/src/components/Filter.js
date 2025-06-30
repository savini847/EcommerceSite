import React, { useState, useEffect } from 'react';
import { filterTags } from './Donuts';

const Filter = ({ donuts, onFilterChange }) => {
  const allFilters = [...new Set([...filterTags])];

  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  useEffect(() => {
    let filtered = donuts;

    if (selectedFilters.length > 0) {
      filtered = filtered.filter((donut) =>
        selectedFilters.every((filter) => donut.tags.includes(filter))
      );
    }

    onFilterChange({ filteredDonuts: filtered });
  }, [selectedFilters, donuts, onFilterChange]);

  const resetFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div
      className="filter-menu p-3 border rounded"
      style={{ minWidth: '220px', height: 'fit-content', flexShrink: 0 }}
    >
      <h5>Filters</h5>

      {allFilters.map((filter) => {
        const id = `filter-${filter}`;
        return (
          <div key={filter} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={id}
              checked={selectedFilters.includes(filter)}
              onChange={() => toggleFilter(filter)}
            />
            <label className="form-check-label" htmlFor={id}>
              {filter}
            </label>
          </div>
        );
      })}

      <button className="btn btn-outline-primary w-100 mt-3" onClick={resetFilters}>
        Reset Filters
      </button>
    </div>
  );
};

export default Filter;
