import React from "react";
import { Redirect, Route } from "react-router-dom";
const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (authenticated ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

export default ProtectedRoute;
