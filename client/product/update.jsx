import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "../src/components/navbar";
import Header from "../src/components/header";
import Heading from "../src/components/heading";
import axios from "axios";
import auth from "../lib/auth-helper";

export default function UpdateCake() {
  const [display, setDisplay] = useState("Update Cake");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [flavor, setFlavor] = useState("");
  const [ingredients, setIngredients] = useState("");

  const { cakeId } = useParams();
  const navigate = useNavigate();

  async function getCakeById(id) {
    let dataToUpdate;
    try {
      dataToUpdate = await axios.get(
        "http://localhost:3000/api/products/" + cakeId,
        {
          headers: {
            auth: auth.isAuthenticated().token,
          },
        }
      );
      setName(dataToUpdate.data.name);
      setPrice(dataToUpdate.data.price);
      setFlavor(dataToUpdate.data.flavor);
      setIngredients(dataToUpdate.data.ingredients);
    } catch (e) {}
  }
  useEffect(() => {
    getCakeById(cakeId);
  }, []);

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
      let res = await axios.put(
        "http://localhost:3000/api/products/" + cakeId,
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
      setDisplay("Cake updated successfully!");
    } catch (e) {
      setDisplay("Cake not updated!" + e.message);
    }
    navigate("/cake");
  }
  return (
    <div className="App">
      <Header title="Code Confectioners: Cakes" />
      <Heading />
      <Navigation />

      <h1>{display}</h1>
      <form action="/submit_cake" method="PUT">
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
        <button onClick={clicked}>Update</button>
      </form>
    </div>
  );
}
