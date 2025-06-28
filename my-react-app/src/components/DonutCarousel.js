import React from 'react';
import { useNavigate } from 'react-router-dom';
import donuts from './Donuts';

const DonutCarousel = ({ currentId, tag }) => {
  const navigate = useNavigate();

  const getRandomDonuts = () => {
    const others = donuts.filter(d => d.id !== currentId);
    const shuffled = [...others].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  };

  const filtered = tag
    ? donuts.filter(d => d.id !== currentId && d.tags?.includes(tag)).slice(0, 10)
    : getRandomDonuts();

  return (
    <div className="text-center">
      <div
        className="d-flex gap-3 overflow-auto"
        style={{ 
          justifyContent: 'start',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch' 
        }}
      >
        {filtered.map((d, index) => (
          <div
            key={d.id}
            className="card"
            style={{
              minWidth: 200,
              cursor: 'pointer',
              scrollSnapAlign: 'start',
              marginLeft: index === 0 ? '0.5rem' : '0',
            }}
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
                padding: '10px',
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
