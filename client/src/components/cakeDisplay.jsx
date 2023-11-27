import React from 'react';


// Table to display cakes
const CakeDisplay = ({ cakes }) => {
  return (
    <div>
      <h2>Cakes</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Flavor</th>
          </tr>
        </thead>
        <tbody>
          {cakes.map((cake, index) => (
            <tr key={index}>
              <td>{cake.name}</td>
              <td>{cake.price}</td>
              <td>{cake.flavor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CakeDisplay;
