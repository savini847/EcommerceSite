import React from 'react';
import { useLocation } from 'react-router-dom';
import donutsData from './Donuts'; 
import DonutCard from './DonutCard';

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';

  const results = donutsData.filter(donut =>
    donut.name.toLowerCase().includes(query.toLowerCase()) ||
    donut.description.toLowerCase().includes(query.toLowerCase()) ||
    (donut.tags && donut.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())))
  );

  return (
    <div className="container py-4">
      <h2 className="mb-4">Search Results for "{query}"</h2>
      {results.length > 0 ? (
        <div className="row">
          {results.map(donut => (
            <div key={donut.id} className="col-md-4 mb-4">
              <DonutCard donut={donut} />
            </div>
          ))}
        </div>
      ) : (
        <p>No donuts found. Try another search!</p>
      )}
    </div>
  );
};

export default SearchPage;
