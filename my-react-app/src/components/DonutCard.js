import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

const DonutCard = ({ donut }) => {
  return (
    <div className="card h-100 shadow-sm" style={{ backgroundColor: '#fff0fa' }}>
      <Link to={`/donut/${donut.id}`} className="text-decoration-none text-dark">
        <img
          src={donut.image}
          alt={donut.name}
          className="card-img-top"
          style={{ height: '200px', width: '100%', objectFit: 'contain', padding: '10px'}}
        />
      </Link>

      <div className="card-body d-flex flex-column justify-content-between">
        <Link to={`/donut/${donut.id}`} className="text-decoration-none text-dark">
          <h5 className="card-title text-center">{donut.name || "No Name"}</h5>
        </Link>
        <div className="text-center mt-3">
          <span className="btn btn-outline-primary me-2">
            ${donut.price.toFixed(2)}
          </span>
          <AddToCartButton donut={donut} />
        </div>
      </div>
    </div>
  );
};

export default DonutCard;