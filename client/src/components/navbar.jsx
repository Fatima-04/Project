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
      <a href="/" className="nav-link" style={isActive(location, '/')}>
        Home
      </a>
    </li>
    <li className="nav-item">
      <a href="/cake" className="nav-link" style={isActive(location, '/cake')}>
        Cakes
      </a>
    </li>

    {!auth.isAuthenticated() && (
      <span>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a href="/signup" className="nav-link" style={isActive(location, '/signup')}>
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
            <a href="/customorder" className="nav-link" style={isActive(location, '/customorder')}>
              Custom Order
            </a>
          </li>

          <li className="nav-item">
            <a href="/cart" className="nav-link" style={isActive(location, '/cart')}>
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
