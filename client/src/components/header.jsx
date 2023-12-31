
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Header = ({ title }) => {
  return (
    <Helmet>
      <meta charset="UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
      <link rel="stylesheet" href="/bootstrap/dist/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="../css/style.css"/>

      <title>{title}</title>
    </Helmet>
  );
};


Header.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Header;

