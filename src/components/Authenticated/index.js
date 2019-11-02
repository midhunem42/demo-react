import React, { Component } from "react";
import { nonProtectedRoute, protectedRoutes } from "../../routes";
import ProtectedRoute from "../../routes/ProtectedRoute";
import DefaultRoute from "../../routes/DefaultRoute";

import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LoginScreen from "../../containers/LoginScreen";

/**
 * Routing are done this component //#endregion
 * if user is authenticated protectedRoutes will enabled
 * else nonProtectedRoute pages can accessed
 */
class Authenticated extends Component {
  isToken = () => {
    return this.props.globalReducer.token === null ? false : true;
  };
  render() {
    const isAuthenticated = this.isToken();
    return (
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Redirect to="/home" /> : <LoginScreen />}
        </Route>
        {nonProtectedRoute.map((prop, key) => {
          return (
            <DefaultRoute
              exact
              authenticated={isAuthenticated}
              path={prop.path}
              key={key}
              component={prop.component}
            />
          );
        })}
        {protectedRoutes.map((prop, key) => {
          return (
            <ProtectedRoute
              authenticated={isAuthenticated}
              exact
              path={prop.path}
              key={key}
              component={prop.component}
            />
          );
        })}
      </Switch>
    );
  }
}
const mapStateToProps = state => {
  return {
    globalReducer: state.globalReducer.toJS()
  };
};
export default connect(mapStateToProps)(Authenticated);
