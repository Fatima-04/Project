import React, { useState } from 'react';

const CustomForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [flavor, setFlavor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      name,
      price,
      flavor,
    };
    onSubmit(formData);

    // Reset the form fields after submission
    setName('');
    setPrice('');
    setFlavor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Flavor:
        <input type="text" value={flavor} onChange={(e) => setFlavor(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;