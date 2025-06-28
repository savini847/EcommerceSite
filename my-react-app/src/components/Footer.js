import React from 'react';

const Footer = () => {
  return (
    <footer
      className="shadow-sm d-flex justify-content-center align-items-center"
      style={{ height: '70px', backgroundColor: '#fff0fa', marginTop: '2rem' }}
    >
      <p className="mb-0 text-pink small">
        &copy; {new Date().getFullYear()} The Donut Atelier. 
      </p>
    </footer>
  );
};

export default Footer;
