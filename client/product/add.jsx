import React, { useState } from "react";
import Navigation from "../src/components/navbar";
import Header from "../src/components/header";
import Heading from "../src/components/heading";
import axios from "axios";
import auth from "../lib/auth-helper";
import Footer from "../src/components/footer";
import feConfig from "../frontend-config";

const PORT = feConfig.serverPort;

export default function CreateCake() {
  const [display, setDisplay] = useState("Create Cake");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [flavor, setFlavor] = useState("");
  const [ingredients, setIngredients] = useState("");

  function nameValue(event) {
    setName(event.target.value);
  }
  function priceValue(event) {
    setPrice(event.target.value);
  }
  function flavorValue(event) {
    setFlavor(event.target.value);
  }
  function ingredientsValue(event) {
    setIngredients(event.target.value);
  }

  async function clicked(event) {
    event.preventDefault();
    try {
      let res = await axios.post(
        `http://localhost:${PORT}/api/products`,
        {
          name: name,
          price: price,
          flavor: flavor,
          ingredients: ingredients,
        },
        {
          headers: {
            auth: auth.isAuthenticated().token,
            "Content-Type": "application/json",
          },
        }
      );
      setDisplay("Cake added successfully!");
    } catch (e) {
      setDisplay("Cake not added!" + e.message);
    }
  }
  return (
    <div className="App">
      <Header title="Code Confectioners: Cakes" />
      <Heading />
      <Navigation />
      <div className="container-fluid">
        <h1>{display}</h1>
        <form
          className="row row-cols-lg-auto g-3 align-items-center"
          action="/submit_cake"
          method="POST"
        >
          <div className="col-12">
            <label className="visually-hidden" htmlFor="cakeName">
              Cake Name:
            </label>

            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Cake Name"
                id="cakeName"
                name="cakeName"
                required
                value={name}
                onChange={nameValue}
              />
            </div>
          </div>
          <br /> <br />
          <div className="col-12">
            <label className="visually-hidden" htmlFor="Flavor">
              Flavor:
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Flavor"
                id="cakeFlavor"
                name="cakeFlavor"
                required
                value={flavor}
                onChange={flavorValue}
              />
            </div>
          </div>
          <br /> <br />
          <div className="col-12">
            <label className="visually-hidden" htmlFor="Price">
              Price:
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Price"
                id="cakeFlavor"
                name="cakeFlavor"
                required
                value={price}
                onChange={priceValue}
              />
            </div>
          </div>
          <br /> <br />
          <div className="col-12">
            <label className="visually-hidden" htmlFor="Ingredients">
              Ingredients:
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Ingredients"
                id="cakeFlavor"
                name="cakeFlavor"
                required
                value={ingredients}
                onChange={ingredientsValue}
              />
            </div>
          </div>
          <br /> <br />
          <button type="submit" className="btn btn-secondary" onClick={clicked}>
            Add Cake
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
