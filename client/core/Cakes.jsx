import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from '../src/components/navbar';
import Header from '../src/components/header';
import Heading from '../src/components/heading';
import CakeDisplay from '../src/components/cakeDisplay';

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
  const classes = useStyles();

  // EXAMPLE CAKES MUST BE REPLACED WITH API
  const cakes = [
    { name: 'Chocolate Cake', price: '$20', flavor: 'Chocolate' },
    { name: 'Vanilla Cake', price: '$18', flavor: 'Vanilla' },
  ];

  return (
    <div className="App">
      <Header title="Code Confectioners: Cakes" />
      <Heading />
      <Navigation />
      <CakeDisplay cakes={cakes} />
    </div>
  );
}
