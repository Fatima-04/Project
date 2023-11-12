// npm install react-helmet - Dynamically sets the page title
// Head.jsx

import React from 'react';
import { Helmet } from 'react-helmet';

const Header = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Header;

