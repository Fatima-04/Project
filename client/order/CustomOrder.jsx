import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from '../src/components/navbar';
import Header from '../src/components/header';
import Heading from '../src/components/heading';
import CustomForm from '../src/components/customForm';
import Footer from '../src/components/footer';

const useStyles = makeStyles(theme => ({
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

export default function CustomOrder(){ 
const classes = useStyles()
return (
<div className='App'>
  <Header title="Code Confectioners: Custom Order"/>
  <Heading/>
  <Navigation/>
  <CustomForm/>
  <Footer/>
</div>
)
}
