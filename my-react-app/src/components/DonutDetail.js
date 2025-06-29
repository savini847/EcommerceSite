import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import donuts, { categoryTags } from './Donuts';
import DonutCarousel from './DonutCarousel';
import AddToCartButton from './AddToCartButton';

const DonutDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const donut = donuts.find(d => d.id === parseInt(id));

  const categoryTag = donut.tags?.find(tag => categoryTags.includes(tag));

  return (
    <div className="container py-5">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src={donut.image} alt={donut.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>{donut.name}</h2>
          <p>{donut.description || "No description available."}</p>
          <h4>${donut.price.toFixed(2)}</h4>
          {donut.tags?.length > 0 && (
            <div className="mb-3">
              {donut.tags.map((tag, index) => (
                <span key={index} className="badge bg-pink me-2">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="mt-4">
            <AddToCartButton donut={donut} />
          </div>
        </div>
      </div>

      <h3 className="text-center mb-4">Discover More {categoryTag} Donuts</h3>
      <DonutCarousel currentId={donut.id} tag={categoryTag} />
    </div>
  );
};

export default DonutDetail;