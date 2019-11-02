import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
const DefaultRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !authenticated ? <Component {...props} /> : <Redirect to="/home" />
    }
  />
);
DefaultRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired
};
export default DefaultRoute;
