// npm install react-helmet - Dynamically sets the page title


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

