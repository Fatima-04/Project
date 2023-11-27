import React, { useState } from "react";
import Navigation from "../src/components/navbar";
import Header from "../src/components/header";
import Heading from "../src/components/heading";
import axios from "axios";
import auth from "../lib/auth-helper";

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
        "http://localhost:3000/api/products",
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

      <h1>{display}</h1>
      <form action="/submit_cake" method="POST">
        <label for="cakeName">Cake Name:</label>
        <input
          type="text"
          id="cakeName"
          name="cakeName"
          required
          value={name}
          onChange={nameValue}
        />
        <br /> <br />
        <label for="Flavor">Flavor:</label>
        <input
          type="text"
          id="cakeFlavor"
          name="cakeFlavor"
          required
          value={flavor}
          onChange={flavorValue}
        />
        <br /> <br />
        <label for="Price">Price:</label>
        <input
          type="text"
          id="cakeFlavor"
          name="cakeFlavor"
          required
          value={price}
          onChange={priceValue}
        />
        <br /> <br />
        <label for="Flavor">Ingredients:</label>
        <input
          type="text"
          id="cakeFlavor"
          name="cakeFlavor"
          required
          value={ingredients}
          onChange={ingredientsValue}
        />
        <br /> <br />
        <button onClick={clicked}>Add a Cake</button>
      </form>
    </div>
  );
}
