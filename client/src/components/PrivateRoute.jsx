import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../auth/useAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();
  return (
    <Route {...rest}>
      {auth.isLogged() ? <Component /> : <Redirect to="/social" />}
    </Route>
  );
};

export default PrivateRoute;
