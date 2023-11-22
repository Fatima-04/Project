import React from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../lib/auth-helper";
import Button from "@material-ui/core/Button";
import './styleSheet.css';

const isActive = (location, path) => {
  return location.pathname === path
    ? { color: "#00008B" }
    : { color: "#ffffff" };
};


const Navigation = () => {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav id="navBar">
      <ul>
        <li>
          <Link to="/" style={isActive(location, "/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={isActive(location, "/about")}>
            About
          </Link>
        </li>
        <li>
          <Link to="/cake" style={isActive(location, "/cake")}>
            Cakes
          </Link>
        </li>

        {!auth.isAuthenticated() && (
          <ul>
            <li>
              <Link to="/signup" style={isActive(location, "/signup")}>
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        )}

        {auth.isAuthenticated() && (
          <ul>
            <li>
              <Link to="/customorder" style={isActive(location, "/customorder")}>
                Custom Order
              </Link>
            </li>

            <li>
              <Link to="/account" style={isActive(location, "/account")}>
                Account
              </Link>
            </li>

            <li>
              <Link to={"/user/" + auth.isAuthenticated().user._id}>
                Profile
              </Link>
            </li>

            <li>
              <Link to={"/user/" + auth.isAuthenticated().user._id}>
                Cart
              </Link>
            </li>

            <li>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <div
                onClick={() => {
                  auth.clearJWT();
                }}
              >
                Sign Out
              </div>
            </Link>
              
            </li>
          </ul>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
