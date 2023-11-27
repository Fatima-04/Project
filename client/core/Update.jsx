import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Navigation = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Code Confectioners
            </Link>
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            <Link to="/about" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '10px' }}>
              About
            </Link>
            <Link to="/update-profile" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '10px' }}>
              Update User
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
