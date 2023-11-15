import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from './auth-helper';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        //Components to be rendered in this PrivateRoute will only
        //load when the user is authenticated
        auth.isAuthenticated() ? (
            <Component {...props} />
        ) : (
            //User is redirected to the signin page if not authenticated
            <Redirect to={{
                pathname: '/signin',
                state: { from: props.location }
            }} />
        )
    )} />
)

export default PrivateRoute;