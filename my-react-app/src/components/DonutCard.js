import React from 'react';
import { Link } from 'react-router-dom';

const DonutCard = ({ donut }) => {
  return (
    <Link to={`/donut/${donut.id}`} className="text-decoration-none text-dark">
      <div className="card h-100 shadow-sm">
        <img
            src={donut.image}
            alt={donut.name}
            className="card-img-top"
            style={{ height: '200px', width: '100%', objectFit: 'contain', padding: '10px' }}
        />

        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title text-center">{donut.name || "No Name"}</h5>
          <div className="text-center mt-3">
            <span className="btn btn-outline-primary disabled">
              ${donut.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DonutCard;
