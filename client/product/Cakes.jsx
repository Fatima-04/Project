import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from '../src/components/navbar';
import Header from '../src/components/header';
import Heading from '../src/components/heading';
import axios from 'axios';
import auth from '../lib/auth-helper';
import Footer from '../src/components/footer';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
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
    let cakesArray = await axios.get('http://localhost:3000/api/products', {
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
    axios.delete('http://localhost:3000/api/products/' + cakeId, {
      headers: {
        auth: auth.isAuthenticated().token,
      },
    });
    getAllCakes();
  };

  const handleUpdate = (cakeId) => {
    axios.put(
      'http://localhost:3000/api/products/' + cakeId,
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
          {auth.isAuthenticated() && (
            <button
              type="button"
              className="btn btn-outline-primary"
              id="addCake"
            >
              <a href="/add">Add Cake</a>
            </button>
          )}

          <h2>Cakes</h2>
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
                    <button>
                      <a href={'/update/' + cake._id}>Update</a>
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(cake._id)}>
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
