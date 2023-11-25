import React, { useState, useEffect } from 'react';
import { list } from '../user/api-user';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
}));

const Account = () => {
  const classes = useStyles();

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountsResponse = await list();
        if (!accountsResponse || accountsResponse.error) {
          console.error(accountsResponse ? accountsResponse.error : 'Empty response');
          return;
        }
        setAccounts(accountsResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h4" gutterBottom>
        List of Accounts
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              {/* Add more columns as needed */}
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map(account => (
              <TableRow key={account._id}>
                <TableCell>{account.name}</TableCell>
                <TableCell>{account.email}</TableCell>
                {/* Add more cells as needed */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Account;
