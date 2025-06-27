import React from 'react';
import { useNavigate } from 'react-router-dom';
import donuts from './Donuts';

const DonutCarousel = ({ currentId, tag }) => {
  const navigate = useNavigate();

  const filtered = donuts.filter(d =>
    d.id !== currentId && d.tags.includes(tag)
  ).slice(0, 10);

  return (
    <div className="text-center">
      <div className="d-flex justify-content-center overflow-auto gap-3 px-2">
        {filtered.map(d => (
          <div
            key={d.id}
            className="card"
            style={{ minWidth: 200, cursor: 'pointer' }}
            onClick={() => navigate(`/donut/${d.id}`)}
          >
            <img
              src={d.image}
              alt={d.name}
              className="card-img-top"
              style={{
                height: '200px',
                width: '100%',
                objectFit: 'contain',
                padding: '10px'
              }}
            />
            <div className="card-body text-center">
              <h6 className="card-title">{d.name || 'Unnamed'}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutCarousel;
