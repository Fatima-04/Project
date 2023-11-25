import React from 'react';

const Heading = ({ title }) => {
  return (
    <div>
    <img id='logo'
          src="..\public\images\Cake_Logo.png"
          alt="Logo"
          width="200" 
          height="200"
        />
    <h1 id='brandName'>Code Confectioners</h1>
     </div>   
  );
};

export default Heading;

