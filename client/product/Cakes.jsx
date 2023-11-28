import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "../src/components/navbar";
import Header from "../src/components/header";
import Heading from "../src/components/heading";
import CakeDisplay from "./cakeDisplay";
import axios from "axios";
import auth from "../lib/auth-helper";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
  },
  title: {
    padding: theme.spacing(3, 2.5, 2),
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
}));

export default function Cakes() {
  const [cakes, setCakes] = useState([]);

  const getAllCakes = async () => {
    let cakesArray = await axios.get("http://localhost:3000/api/products", {
      headers: {
        auth: auth.isAuthenticated().token,
      },
    });
    setCakes(cakesArray.data);
  };

  useEffect(() => {
    getAllCakes();
  }, []);

  const classes = useStyles();

  // EXAMPLE CAKES MUST BE REPLACED WITH API
  return (
    <div className="App">
      <Header title="Code Confectioners: Cakes" />
      <Heading />
      <Navigation />
      {auth.isAuthenticated() && (
        <button id="addCake">
          <a href="/add">Add Cake</a>
        </button>
      )}
      {cakes && <CakeDisplay cakes={cakes} />}
    </div>
  );
}
