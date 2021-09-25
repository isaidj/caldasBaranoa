import React, { useEffect, useState } from "react";
import styled from "styled-components";
//icon menu
import { FaBars, FaDropbox } from "react-icons/fa";
//icon close
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
//setting gear icon
import { FiSettings } from "react-icons/fi";
import { IoMdArrowDropup } from "react-icons/io";
import useGlobalVariables from "../global/useGlobalVariables";
import axios from "axios";
import { DropMenu } from "./tagComponents/DropMenu";
import useAuth from "../auth/useAuth";

const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
//open and close menu

const MenuLateral = (props) => {
  const urlWorking = useGlobalVariables().urlWorking;
  const isAuth = useAuth().isLogged();
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
  // console.log(areas);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <MenuLateralStyled
        className="MenuLateralStyled"
        open={isOpen}
        isAuth={isAuth}
        side={props.side}
      >
        <FaBars className="btn_open" onClick={handleClick} />

        <div className="menu_lateral">
          <div className="menu_lateral__superior">
            <FiSettings className="icon__settings" onClick={handleClick} />
            <FaTimes className="icon__close" onClick={handleClick} />
          </div>
          <ul className="menu">
            <li className="menu__item">
              <NavLink
                exact
                className="navItem"
                activeClassName="menu__item__active"
                to="/"
                onClick={handleClick}
              >
                INICIO
              </NavLink>
            </li>
            <li className="menu__item">
              <DropMenu>
                <a
                  // href="#/"
                  className="navItem"
                  activeClassName="menu__item__active"
                >
                  INSTITUCIONAL
                  <IoMdArrowDropup className="iconArrow" />
                </a>
                <div className="submenu">
                  {areas.map((area, index) => (
                    <NavLink
                      key={index}
                      className="navItem"
                      activeClassName="menu__item__active"
                      to={`/areas/${area.idareas}`}
                      onClick={handleClick}
                    >
                      {area.nom_area}
                    </NavLink>
                  ))}
                </div>
              </DropMenu>
            </li>
            {secciones.map((seccion, index) => (
              <li className="menu__item" key={index}>
                <NavLink
                  exact
                  className="navItem"
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
                className="navItem"
                activeClassName="menu__item__active"
                to="/secciones/local"
                to={{
                  pathname: "/secciones/local",
                  state: {
                    seccion: secciones[0],
                  },
                }}
                onClick={handleClick}
              >
                LOCAL
              </NavLink>
            </li>
            {}
            <li className="menu__item">
              <NavLink
                exact
                className="navItem"
                activeClassName="menu__item__active"
                to={{
                  pathname: "/secciones/nacional",

                  state: {
                    seccion: secciones[1],
                  },
                }}
                onClick={handleClick}
              >
                NACIONAL
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink
                exact
                className="navItem"
                activeClassName="menu__item__active"
                to="/secciones/internacional"
                to={{
                  pathname: "/secciones/internacional",
                  state: {
                    seccion: secciones[2],
                  },
                }}
                onClick={handleClick}
              >
                INTERNACIONAL
              </NavLink>
            </li> */}

            <li className="menu__item menu__item__login">
              <a
                onClick={() => {
                  // window.open("/UserDashboard/crear", "_blank");
                  //oopen in the same page
                  window.open("/UserDashboard/crear", "_self");
                  handleClick();
                }}
                className="navItem"
                activeClassName="menu__item__active"
              >
                DASHBOARD
              </a>
            </li>
          </ul>
        </div>
      </MenuLateralStyled>
    </>
  );
};

export default MenuLateral;
//styled with variable isOpen to open and close menu with animation
const MenuLateralStyled = styled.div`
  .btn_open {
    z-index: 999;

    margin-right: 0;
    width: 30px;
    height: 30px;
    color: #2b2d42;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .menu_lateral {
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: #f7f7f7;
    border: 1px 1px 1px 0px solid #ef233c;

    z-index: 1000;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.1s ease-in-out;

    .menu_lateral__superior {
      display: flex;
      justify-content: space-between;

      padding: 1rem;
      font-size: 1.5rem;
    }
    .icon__close {
      cursor: pointer;
      color: #1f1f1f;
    }
    .icon__settings {
      cursor: pointer;
      color: #1f1f1f;
    }
    .menu {
      list-style: none;
      padding: 0;
      margin: 0;
      margin-top: 15%;
      .menu__item {
        position: relative;

        .navItem {
          display: block;
          color: #1f1f1f;
          font-size: 1.2rem;
          font-weight: bold;
          font-size: 1.1rem;
          padding: 1rem;

          /* border-radius: 15px; */
          text-decoration: none;
          text-align: left;
          transition: background 0.3s ease-in-out;
          padding-left: 20%;

          &:hover {
            /* background: linear-gradient(
              90deg,
              rgba(239, 35, 60, 1) 0%,
              rgba(239, 35, 60, 0) 67%
            ); */
            background-color: #ef233c;

            /* border-radius: 15px; */
            color: #ffffff;
            .spanItem {
              color: #000000;
            }
          }
        }
        .menu__item__active {
          color: #ef233c;
        }
        .submenu {
          /* display: block; */
          padding-left: 10%;
        }
      }
    }
    .iconDropDown {
      transform: rotate(180deg);
    }
    //Border bottom middle span
    .borderB {
      border-bottom: 1px solid #242424;
      width: 50%;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .menu__item__login {
    ${(props) => (props.isAuth ? `` : `display: none;`)}
  }

  ${mobile} {
    margin-left: 5px;
    .menu_lateral {
      width: 100%;
      transition: transform 0.1s ease-in-out;
      .menu {
        .menu__item {
          .navItem {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;
