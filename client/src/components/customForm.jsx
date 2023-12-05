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
    <div className="container-fluid">
      <form
        className="row row-cols-lg-auto g-3 align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="col-12">
          <label
            className="visually-hidden"
            htmlFor="inlineFormInputGroupUsername"
          >
            Name:
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </label>
        </div>
        <br />
        <div className="col-12">
          <label
            className="visually-hidden"
            htmlFor="inlineFormInputGroupUsername"
          >
            Price:
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </label>
        </div>
        <br />
        <label
          className="visually-hidden"
          htmlFor="inlineFormInputGroupUsername"
        >
          Flavor:
          <input
            type="text"
            className="form-control"
            placeholder="Flavor"
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
          />
        </label>
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
