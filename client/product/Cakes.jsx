import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "../src/components/navbar";
import Header from "../src/components/header";
import Heading from "../src/components/heading";
import axios from "axios";
import auth from "../lib/auth-helper";
import Footer from "../src/components/footer";
import feConfig from "../frontend-config";
const PORT = feConfig.serverPort;
const server = "https://codeconfectioners-ychr.onrender.com";

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
    let cakesArray = await axios.get(`${server}/api/products`, {
      headers: {
        auth: auth.isAuthenticated().token,
      },
    });
    setCakes(cakesArray.data);
  };

  useEffect(() => {
    getAllCakes();
  }, []);

  const handleDelete = (cakeId) => {
    axios.delete(`${server}/api/products/` + cakeId, {
      headers: {
        auth: auth.isAuthenticated().token,
      },
    });
    getAllCakes();
  };

  const handleUpdate = (cakeId) => {
    axios.put(
      `${server}/api/products/` + cakeId,
      {},
      {
        headers: {
          auth: auth.isAuthenticated().token,
        },
      }
    );
    getAllCakes();
  };

  const classes = useStyles();

  // EXAMPLE CAKES MUST BE REPLACED WITH API
  return (
    <div className="App">
      <Header title="Code Confectioners: Cakes" />
      <Heading />
      <Navigation />
      <body>
        <div className="container-fluid">
          <h1>Cakes</h1>
          {auth.isAuthenticated() && (
            <a id="addCake" className="btn btn-outline-secondary" href="/add">
              Add Cake
            </a>
          )}

          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Flavor</th>
                <th> </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {cakes.map((cake, index) => (
                <tr key={index}>
                  <td>{cake.name}</td>
                  <td>{cake.price}</td>
                  <td>{cake.flavor}</td>
                  <td>
                    <a
                      className="btn btn-outline-secondary"
                      href={"/update/" + cake._id}
                    >
                      Update
                    </a>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(cake._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </body>
      <Footer />
    </div>
  );
}
