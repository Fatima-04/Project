import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./auth-helper.js";
import { signin } from "./api-auth.js";

//Take props in the argument that contain React Router variables
export default function Signin(props) {
  const location = useLocation();
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    //redirectToReferrer component from React Router
    //will be set to true when the user successfully signs in
    redirectToReferrer: false,
  });

  const clickSubmit = () => {
    const user = {
      //Create user object with values taken from the 'values' state
      email: values.email || undefined,
      password: values.password || undefined,
    };

    //Calls the signin fetch method to sign-in the user with the backend
    signin(user).then((data) => {
      if (data.error) {
        //if there's error, set the error in state
        setValues({ ...values, error: data.error });
      } else {
        //auth.authenticate() method from auth-helper.js
        //will save the received JWT credentials in local storage
        auth.authenticate(data, () => {
          setValues({ ...values, error: "", redirectToReferrer: true });
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const { from } = location.state || {
    //Or default to the home path
    from: {
      pathname: "/",
    },
  };

  //If redirectToReferrer is true, redirect the user to the page they were on
  const { redirectToReferrer } = values;
  if (redirectToReferrer) {
    return <Navigate to={from} />;
  }

  //otherwise show them log in form
  return (
    <Card className="loginform">
      <CardContent>
        <Typography variant="h6">Sign In</Typography>
        <TextField
          id="email"
          type="email"
          label="Email"
          className="loginform-text"
          value={values.email}
          onChange={handleChange("email")}
          margin="normal"
        />
        <br />
        <TextField
          id="password"
          type="password"
          label="Password"
          className="loginform-password"
          value={values.password}
          onChange={handleChange("password")}
          margin="normal"
        />
        <br />{" "}
        {values.error && (
          <Typography component="p" color="error">
            <Icon color="error" className="loginform-error">

              error

            </Icon>
            {values.error}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          onClick={clickSubmit}
          className="loginform-submit"
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
