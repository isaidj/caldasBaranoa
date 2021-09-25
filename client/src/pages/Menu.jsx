import React, { useEffect, useState } from "react";
// import { CgMenu } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../auth/useAuth";
import { CapitalizeAll } from "../components/Funciones";
//prueba de color
const Menu = (props) => {
  const isAuth = useAuth().isLogged();
  const [secciones, setSecciones] = useState([]);
  useEffect(() => {
    setSecciones(props.secciones);
  }, [props.secciones]);

  if (secciones.length > 0) {
    return (
      <div>
        <nav className="menu__container">
          <MenuStyled isAuth={isAuth}>
            <ul className="menu">
              <li className="menu__item">
                <NavLink exact activeClassName="menu__item__active" to="/">
                  INICIO
                </NavLink>
              </li>
              <li className="menu__item">
                <a>
                  INSTITUCIONAL
                  <i className="fas fa-caret-down iconDropDown"></i>
                </a>
                <div className="submenu">
                  {props.areas.map((area, index) => (
                    <NavLink
                      key={index}
                      className="submenu__item"
                      to={`/areas/${area.idareas}`}
                    >
                      {area.nom_area}
                    </NavLink>
                  ))}
                </div>
              </li>
              {secciones.map((seccion, index) => (
                <li className="menu__item" key={index}>
                  <NavLink
                    exact
                    activeClassName="menu__item__active"
                    to={`/${seccion.nom_seccion}/${seccion.idsecciones}`}
                  >
                    {seccion.nom_seccion.toUpperCase()}
                  </NavLink>
                </li>
              ))}
              {/* <li className="menu__item">
                <NavLink
                  exact
                  activeClassName="menu__item__active"
                  to={{
                    pathname: `${props.secciones[0].nom_seccion}`,
                    state: {
                      seccion: props.secciones[0].nom_seccion,
                    },
                  }}
                >
                  LOCAL
                </NavLink>
              </li> */}

              {/* <li className="menu__item">
                <NavLink
                  exact
                  activeClassName="menu__item__active"
                  to={`/seccion/${props.secciones[1].nom_seccion}`}
                >
                  NACIONAL
                </NavLink>
              </li>

              <li className="menu__item">
                <NavLink
                  exact
                  activeClassName="menu__item__active"
                  // to="/secciones/internacional"
                  to={`/seccion/${props.secciones[2].nom_seccion}`}
                >
                  INTERNACIONAL
                </NavLink>
              </li> */}

              <li className="menu__item menu__item__login">
                <a
                  onClick={() => {
                    window.open("/UserDashboard/crear", "_self");
                  }}
                >
                  DASHBOARD
                </a>
              </li>
            </ul>
          </MenuStyled>
        </nav>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Menu;
///////STYLES ZONE///////
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;

//menu horizontal
export const MenuStyled = styled.div`
  max-width: 70%;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  .menu {
    position: relative;
    display: flex;
    justify-content: space-between;

    align-items: center;
    list-style: none;
    z-index: 1;
    margin: 0;
    padding: 1rem;
    padding-bottom: 0;
    border-bottom: 2px solid #d90429;
    .menu__item {
      .menu__item__active {
        border-radius: 4px 4px 0px 0px;
        background: #ef233c;
        color: #edf2f4;
      }
      a {
        color: #141414;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
        border-radius: 4px 4px 0px 0px;
        padding: 0.5rem;
        padding: 0.5rem;
        transition: all 0.3s ease-in-out;
        &:hover {
          background: #ef233c;
          color: #edf2f4;
        }
      }
      &:hover {
        .submenu {
          position: absolute;
          top: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          background: #ffffff;

          border: 1px solid #f0f0f0;
        }
        .submenu :hover {
          display: flex;
          border-radius: 10px;
        }
        .iconDropDown {
          transform: rotate(360deg);
        }
      }
      .submenu {
        display: none;
      }
      .submenu__item {
        width: 100%;
      }
      .iconDropDown {
        margin-left: 5px;
        transform: rotate(180deg);
      }
    }
    .menu__item__login {
      ${(props) => (props.isAuth ? `` : `display: none;`)}
    }
  }
  ${mobile} {
    display: none;
  }
  ${tablet} {
    max-width: 100%;
  }
`;
