import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { categoryTags } from './Donuts';
import donutsData from './Donuts'; 
import { useCart } from '../context/CartContext';
import '../App.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItemCount, toggleCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [allDonuts, setAllDonuts] = useState(donutsData); 
  const searchRef = useRef();

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = allDonuts.filter(donut => {
      const query = searchQuery.toLowerCase();
      return (
        donut.name.toLowerCase().includes(query) ||
        donut.description.toLowerCase().includes(query) ||
        (donut.tags && donut.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }).slice(0, 5);

    setSearchResults(results);
  }, [searchQuery, allDonuts]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const handleResultClick = (donutId) => {
    navigate(`/donut/${donutId}`);
    setShowSearch(false);
    setSearchQuery('');
    setSearchResults([]);
  };

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

        <div className="navbar-center position-absolute top-50 start-50 translate-middle">
          <Link to="/" className="d-inline-block">
            <img src="/name.png" alt="The Donut Atelier" style={{ height: '60px' }} />
          </Link>
        </div>

        <div className="d-flex align-items-center">

          <div className="position-relative" ref={searchRef}>
            <i
              className="bi bi-search fs-4 mx-3 text-pink"
              style={{ cursor: 'pointer' }}
              title="Search"
              onClick={() => {
                setShowSearch(!showSearch);
                setSearchQuery('');
                setSearchResults([]);
              }}
            ></i>
            
            {showSearch && (
              <div className="search-container position-absolute end-0 mt-2">
                <form onSubmit={handleSearchSubmit} className="d-flex">
                  <input
                    type="text"
                    className="form-control rounded-pill shadow-sm"
                    placeholder="Search donuts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    style={{ width: '300px', padding: '10px 20px' }}
                  />
                </form>
                
                {searchResults.length > 0 && (
                  <div className="search-results bg-white rounded shadow mt-1 overflow-hidden">
                    {searchResults.map(donut => (
                      <div
                        key={donut.id}
                        className="search-result-item p-2 hover-pink"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleResultClick(donut.id)}
                      >
                        {donut.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div
            className="position-relative text-pink"
            style={{ cursor: 'pointer' }}
            onClick={toggleCart}
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