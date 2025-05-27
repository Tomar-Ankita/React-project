import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaShoppingCart, FaMapMarkerAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-4 shadow-sm bg-white">
      <Link className="navbar-brand text-warning" to="/">
        Swiggy Clone
      </Link>
      <div className="ms-auto d-flex align-items-center gap-4">
        <div className="d-flex align-items-center">
          <FaMapMarkerAlt className="me-1 text-warning" />
          <span>Choose Location</span>
        </div>
        <Link to="/cart" className="nav-link d-flex align-items-center">
          <FaShoppingCart className="me-1" /> Cart
        </Link>
        <Link to="/profile" className="nav-link d-flex align-items-center">
          <FaUserCircle className="me-1" /> Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
