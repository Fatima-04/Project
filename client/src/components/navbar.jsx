import React from 'react';
import { Link } from 'react-router-dom';
import './styleSheet.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cake">Cakes</Link>
        </li>
        <li>
          
          <Link to="/customorder">Custom Order</Link>
        </li>
        <li>
        <Link to="/account">Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
