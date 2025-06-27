import React from 'react';
import { useParams, Link } from 'react-router-dom';
import donuts, { categoryTags } from './Donuts';
import DonutCarousel from './DonutCarousel';

const DonutDetail = () => {
  const { id } = useParams();
  const donut = donuts.find(d => d.id === parseInt(id));

  if (!donut) return <p>Donut not found</p>;

  const categoryTag = donut.tags.find(tag => categoryTags.includes(tag)) || "Featured";

  return (
    <div className="container py-5">
      <Link to="/" className="btn btn-outline-secondary mb-4">← Back</Link>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src={donut.image} alt={donut.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>{donut.name}</h2>
          <p>{donut.description || "No description available."}</p>
          <h4>${donut.price.toFixed(2)}</h4>
          <p className="text-muted">Tags: {donut.tags.join(", ")}</p>
        </div>
      </div>

      <h3 className="text-center mb-4">Discover More {categoryTag} Donuts</h3>
      <DonutCarousel currentId={donut.id} tag={categoryTag} />
    </div>
  );
};

export default DonutDetail;
