//user page

import React from "react";

import useAuth from "../auth/useAuth";
import { Crud } from "../components/crudQueries/Crud";

import styled from "styled-components";
import MenuDashboard from "../components/MenuDashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { InsertPubliUser } from "../components/crudQueries/InsertPubliUser";
import GetAllPubliUser from "../components/crudQueries/GetAllPubliUser";
import LoginModal from "../components/LoginModal";
import { UpdatePubliUser } from "../components/crudQueries/UpdatePubliUser";
import Error404 from "./Error404";
import MenuDashboardAdmin from "../components/MenuDashboardAdmin";

import CreateUser from "../components/crudQueries/CreateUsers";
import { AdminDashboardProvider } from "../context/ContextAdminDashboard";
import GetAllPubliAdmin from "../components/crudQueries/GetAllPubliAdmin";
import Register from "../components/Register";
import GetAllUsersAdmin from "../components/crudQueries/GetAllUsersAdmin";

// import styled from "styled-components";

const UserDashboard = () => {
  window.document.title = "Dashboard";
  const auth = useAuth();
  const user = auth.getUser();
  //to capital leter all words
  const capitalize = (str) =>
    str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  //if user=admin then load the admin page else load the user page
  if (user.nombre === "admin") {
    return (
      <Router>
        <DivContainer>
          <MenuDashboardAdmin />
          {/* <div className="loginBtn__container">
          <LoginModal />
        </div> */}

          <Switch>
            {/* <Route exact path="/UserDashboard/crear">
              <InsertPubliUser />
            </Route> */}
            <Route exact path="/UserDashboard/crear">
              <AdminDashboardProvider>
                <div className="users__Dashboard">
                  <Register />
                </div>
              </AdminDashboardProvider>
            </Route>
            <Route exact path="/UserDashboard/usuarios">
              <AdminDashboardProvider>
                <div className="users__Dashboard">
                  <GetAllUsersAdmin />
                </div>
              </AdminDashboardProvider>
            </Route>
            <Route exact path="/UserDashboard/publicaciones">
              <GetAllPubliAdmin />
            </Route>
            {/* <Route exact path={`/UserDashboard/actualizar/:idPubli`}>
              <UpdatePubliUser />
            </Route> */}
            <Route path="*" component={Error404} />
          </Switch>
        </DivContainer>
      </Router>
    );
  } else {
    return (
      <Router>
        <DivContainer>
          <MenuDashboard />
          {/* <div className="loginBtn__container">
            <LoginModal />
          </div> */}

          <Switch>
            <Route exact path="/UserDashboard/crear">
              <InsertPubliUser />
            </Route>
            <Route exact path="/UserDashboard/publicaciones">
              <GetAllPubliUser />
            </Route>
            <Route exact path={`/UserDashboard/actualizar/:idPubli`}>
              <UpdatePubliUser />
            </Route>
            <Route path="*" component={Error404} />
          </Switch>
        </DivContainer>
      </Router>
    );
  }
};

export default UserDashboard;
// const DivContainer = styled.div``;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
const DivContainer = styled.div`
  display: flex;
  flex-direction: row;

  .loginBtn__container {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .users__Dashboard {
    margin-left: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    margin-top: 50px;
  }

  ${tablet} {
  }
`;
