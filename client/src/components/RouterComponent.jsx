//router
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Pais from "../pages/Pais";
import Relevantes from "../pages/Relevantes";

import Social from "../pages/Social";
import { Get } from "./Get";
import Menu from "./Menu";

const RouterComponent = () => {
  return (
    <div>
      <Router>
        <Menu />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/social" component={Get} />
          <Route exact path="/pais" compoexa ctnent={Pais} />
          <Route exact path="/Relevantes" component={Relevantes} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

export default RouterComponent;
