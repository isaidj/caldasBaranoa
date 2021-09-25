//router
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Pais from "../pages/Pais";

import Areas from "../pages/Areas";
import UserDashboard from "../pages/UserDashboard";

// import Social from "../pages/Social";

import Menu from "../pages/Menu";
import PrivateRoute from "./PrivateRoute";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import PageNoticia from "../pages/PageNoticia";
import axios from "axios";
import useGlobalVariables from "../global/useGlobalVariables";
import Secciones from "../pages/Secciones";

const RouterComponent = () => {
  const urlWorking = useGlobalVariables().urlWorking;
  const [areas, setAreas] = useState([]);
  const [secciones, setSecciones] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const r_areas = await axios.get(urlWorking + "getAreas");
    const r_secciones = await axios.get(urlWorking + "getSecciones");
    // console.log(response.data);
    setSecciones(r_secciones.data);
    setAreas(r_areas.data);
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/noticia/:id" component={PageNoticia} />
          <PrivateRoute path="*/UserDashboard" component={UserDashboard} />

          <Router>
            <Header secciones={secciones} areas={areas} />
            <Menu secciones={secciones} areas={areas} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path={`/areas/:idArea`} component={Areas} />
              {secciones.map((seccion, index) => (
                <Route
                  key={index + 1}
                  exact
                  path={`/${seccion.nom_seccion}`}
                  component={Secciones}
                />
              ))}
              <Route exact path="/Local/:id" component={Secciones} />
              <Route exact path="/Nacional/:id" component={Secciones} />
              <Route exact path="/Internacional/:id" component={Secciones} />

              {/* <Route exact path="/areas" component={Areas} /> */}
              <Route exact path="/pais" component={Pais} />

              <Route path="*" component={Error404} />
            </Switch>
            <Footer />
          </Router>
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

export default RouterComponent;
