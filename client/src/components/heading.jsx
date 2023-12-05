import React from "react";
import PropTypes from "prop-types";

const Heading = ({ title }) => {
  return (
    <div id="header-container">
      <div id="title-container">
        <div id="header-box">
          <h1 className="header">CODE CONFECTIONERS</h1>
        </div>

        <div className="logo-icon">
          <img
            className="img-fluid"
            alt="Logo Icon"
            src="../public/images/Cake_Logo.png"
            width="200"
            height="200"
          />
          <h1 id="brandName">{title}</h1>
        </div>
      </div>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
