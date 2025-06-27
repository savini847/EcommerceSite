import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { categoryTags } from './Donuts'; // Import only category tags

const Navbar = ({ cartItemCount }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="bi bi-basket2-fill me-2 fs-3 text-danger"></i>
          <span className="fw-bold fs-4">DonutShop</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                All Donuts
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                {categoryTags.map((tag, index) => (
                  <li key={index}>
                    <Link to={`/category/${tag}`} className="dropdown-item">
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <div
            className="d-flex align-items-center position-relative"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/cart')}
          >
            <i className="bi bi-cart-fill fs-4 text-danger"></i>
            {cartItemCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItemCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
