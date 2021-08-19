//router
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Pais from "../pages/Pais";
import Relevantes from "../pages/Relevantes";
import Social from "../pages/Social";
import UserDashboard from "../pages/UserDashboard";

// import Social from "../pages/Social";

import Menu from "./Menu";
import PrivateRoute from "./PrivateRoute";

const RouterComponent = () => {
  return (
    <div>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/social" component={Social} />
          <Route exact path="/pais" component={Pais} />
          <Route exact path="/Relevantes" component={Relevantes} />
          <PrivateRoute path="/UserDashboard" component={UserDashboard} />

          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

export default RouterComponent;
