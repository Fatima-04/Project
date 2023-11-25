import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { read, update, remove } from '../user/api-user'; // Updated to use 'remove'
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

const AccountSettings = () => {
  const classes = useStyles();
  const { userId } = useParams();
  const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTYwZmIxZmJiYTgyYjliMzIxY2VlYzAiLCJpYXQiOjE3MDA4NTkxMDR9.3Ex5lK_pd6TJmmqL1RDJCLRfjG-kQ1POJw-I6G_p4ik';

  const [user, setUser] = useState({});
  const [updatedUserData, setUpdatedUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await read(
          { userId },
          { t: jwtToken }
        );
        const { name, email } = userResponse;
        setUser({ name, email });
        setUpdatedUserData({ name, email });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userId, jwtToken]);

  const handleEditAccount = async () => {
    try {
      await update(
        { userId },
        { t: jwtToken },
        updatedUserData
      );
      console.log('Account updated successfully');
    } catch (error) {
      console.error('Error updating account:', error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await remove({ userId, credentials: { t: jwtToken } });
      console.log('Account deleted successfully');
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Account Settings for User ID: {userId}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              className={classes.inputField}
              value={updatedUserData.name}
              onChange={(e) =>
                setUpdatedUserData({ ...updatedUserData, name: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              className={classes.inputField}
              value={updatedUserData.email}
              onChange={(e) =>
                setUpdatedUserData({ ...updatedUserData, email: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              className={classes.inputField}
              value={updatedUserData.password}
              onChange={(e) =>
                setUpdatedUserData({ ...updatedUserData, password: e.target.value })
              }
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleEditAccount}
        >
          Save Changes
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </Button>
      </Paper>
    </Container>
  );
};

export default AccountSettings;
