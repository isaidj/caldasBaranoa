import React from "react";
import { CgMenu } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";
import LoginModal from "./LoginModal";
// import LoginProfile from "./LoginProfile";
const Menu = () => {
  const auth = useAuth();

  return (
    <div>
      <header className="header">
        {/* logo lef side and login button right side */}
        <div className="logo">
          <h1> NCB </h1>
        </div>

        <div className="btn-login">
          <LoginModal />
        </div>

        <div className="btn-menu">
          <CgMenu className="btn-openMenu" />
        </div>
      </header>
      <nav className="menu__container">
        <ul>
          <NavLink exact activeClassName="menu__item__active" to="/">
            Inicio
          </NavLink>
          <NavLink exact activeClassName="menu__item__active" to="/social">
            Social
          </NavLink>
          <NavLink exact activeClassName="menu__item__active" to="/pais">
            País
          </NavLink>
          <NavLink exact activeClassName="menu__item__active" to="/relevantes">
            Relevante
          </NavLink>

          <NavLink
            exact
            activeClassName="menu__item__active"
            to="/UserDashboard"
          >
            Dashboard
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
