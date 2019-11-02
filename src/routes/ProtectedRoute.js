import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (authenticated ? <Component {...props} /> : <Redirect to="/" />)}
  />
);
ProtectedRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired
};
export default ProtectedRoute;
