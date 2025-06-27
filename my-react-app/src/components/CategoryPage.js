import React from 'react';
import { useParams } from 'react-router-dom';
import donuts from './Donuts';
import DonutGrid from './DonutGrid';

const CategoryPage = () => {
  const { tag } = useParams();

  const filteredDonuts = donuts.filter(d =>
    d.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );

  return (
    <div className="container mt-4 text-center">
      <h2>{tag} Donuts</h2>
      <DonutGrid donuts={filteredDonuts} />
    </div>
  );
};

export default CategoryPage;
