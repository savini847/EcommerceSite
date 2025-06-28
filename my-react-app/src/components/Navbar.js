import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { categoryTags } from './Donuts';
import '../App.css';

const Navbar = ({ cartItemCount = 0 }) => {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top position-relative"
      style={{ height: '70px', backgroundColor: '#fff0fa'}}
    >
      <div className="container d-flex justify-content-between align-items-center position-relative">

        <div className="d-flex align-items-center">
          <Link to="/" className="navbar-logo me-3">
            <img src="/logo.png" alt="Logo Icon" style={{ height: '60px' }} />
          </Link>

          <ul className="navbar-nav d-flex flex-row gap-3 mb-0">
            <li className="nav-item">
              <NavLink to="/donuts" className="nav-link hover-pink">
                All Donuts
              </NavLink>
            </li>

            <li className="nav-item dropdown position-static">
              <div className="dropdown-hover">
                <a
                  className="nav-link dropdown-toggle hover-pink"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  onClick={(e) => e.preventDefault()}
                >
                  Categories
                </a>
                <ul className="dropdown-menu show-on-hover" aria-labelledby="navbarDropdown">
                  {categoryTags.map((tag, idx) => (
                    <li key={idx}>
                      <Link to={`/category/${tag}`} className="dropdown-item hover-pink">
                        {tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div
          className="navbar-center position-absolute top-50 start-50 translate-middle"
        >
          <Link to="/" className="d-inline-block">
            <img src="/name.png" alt="The Donut Atelier" style={{ height: '60px' }} />
          </Link>
        </div>

        <div className="d-flex align-items-center">
          <i
            className="bi bi-search fs-4 mx-3 text-pink"
            style={{ cursor: 'pointer' }}
            title="Search"
          ></i>
          <div
            className="position-relative text-pink"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/cart')}
          >
            <i className="bi bi-cart-fill fs-4"></i>
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
