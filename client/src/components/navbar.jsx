import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../lib/auth-helper';
import Button from '@material-ui/core/Button';
import './styleSheet.css';

const isActive = (location, path) => {
  return location.pathname === path
    ? { color: '#00008B' }
    : { color: '#ffffff' };
};

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div id="nav-container">
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <a href="/" className={`nav-link ${isActive(location, '/') ? 'nav-link-active' : ''}`}>
        Home
      </a>
    </li>
    <li className="nav-item">
      <a href="/cake" className={`nav-link ${isActive(location, '/cake') ? 'nav-link-active' : ''}`}>
        Cakes
      </a>
    </li>

    {!auth.isAuthenticated() && (
      <span>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a href="/signup" className={`nav-link ${isActive(location, '/signup') ? 'nav-link-active' : ''}`}>
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a href="/signin" className="nav-link">
              Log in
            </a>
          </li>
        </ul>
      </span>
    )}

    {auth.isAuthenticated() && (
      <span>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a href="/customorder" className={`nav-link ${isActive(location, '/customorder') ? 'nav-link-active' : ''}`}>
              Custom Order
            </a>
          </li>

          <li className="nav-item">
            <a href="/cart" className={`nav-link ${isActive(location, '/cart') ? 'nav-link-active' : ''}`}>
              Cart
            </a>
          </li>

          <li className="nav-item">
            <a href={`/user/${auth.isAuthenticated().user._id}`} className="nav-link">
              {auth.isAuthenticated().user.name}
            </a>
          </li>
          <li>
            <a href="/" className="nav-link" onClick={() => { auth.clearJWT(); }}>
              Sign out
            </a>
          </li>
        </ul>
      </span>
    )}
  </ul>
</div>
  );
};

export default Navigation;
