import React from "react";
import { Link, NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <nav className="menu__container">
        <ul>
          <NavLink exact activeClassName="active" to="/">
            Inicio
          </NavLink>
          <NavLink exact to="/social">
            Social
          </NavLink>
          <NavLink exact to="/pais">
            País
          </NavLink>
          <NavLink exact to="/relevantes">
            Relevante
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
