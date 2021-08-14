import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <nav className="menu__container">
        <ul className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/social">Social</Link>
          <Link to="/pais">País</Link>
          <Link to="/relevantes">Relevante</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
