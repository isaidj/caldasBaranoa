import { ListItemIcon } from "@material-ui/core";
import React from "react";
import { FaRegistered, FaSearch, FaSignOutAlt, FaUsers } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";
import { IoIosArrowBack, IoIosPersonAdd } from "react-icons/io";
import { HiHome } from "react-icons/hi";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LoginModal from "./LoginModal";
import MenuUser from "./MenuUser";
import useAuth from "../auth/useAuth";
import { useHistory } from "react-router";
import ProfileUserDashboard from "./ProfileUserDashboard";
import ProfileAdminDashboard from "./ProfileAdminDashboard";
const MenuDashboardAdmin = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  let history = useHistory();
  const auth = useAuth();

  return (
    <MenuDashboardContainer isOpen={isOpen}>
      <meta
        name="viewport"
        content="height=device-height, 
                      width=device-width, initial-scale=1.0, 
                      minimum-scale=1.0, maximum-scale=1.0, 
                      user-scalable=no, target-densitydpi=device-dpi"
      />
      <div className="menu__user">
        <ProfileAdminDashboard isOpen={isOpen} auth={auth} />
      </div>
      <div className="navLink" onClick={() => setIsOpen(!isOpen)}>
        <IoIosArrowBack className="iconOpen" />
        <span className="spanOpen ">{isOpen ? "Cerrar" : "Abrir"}</span>
      </div>
      {/* <NavLink className="navLink" exact to="/UserDashboard/crear">
        <BsFillGrid1X2Fill className="icon" />
        <span className="nav-text">Crear</span>
      </NavLink> */}
      <NavLink
        className="navLink"
        exact
        to="/UserDashboard/crear"
        onClick={() => setIsOpen(false)}
      >
        <IoIosPersonAdd className="icon" />
        <span className="nav-text">Crear usuario</span>
      </NavLink>
      <NavLink
        className="navLink"
        exact
        to="/UserDashboard/usuarios"
        onClick={() => setIsOpen(false)}
      >
        <FaUsers className="icon" />
        <span className="nav-text">Todos los usuarios</span>
      </NavLink>

      <NavLink
        className="navLink"
        exact
        to="/UserDashboard/publicaciones"
        onClick={() => setIsOpen(false)}
      >
        <RiFileList2Line className="icon" />
        <span className="nav-text">Publicaciones</span>
      </NavLink>
      <span className="hr" />
      <a className="navLink" href="/">
        <HiHome className="icon" />
        <span className="nav-text">Inicio</span>
      </a>

      <div className="navLink" onClick={() => auth.logout()}>
        <FaSignOutAlt className="icon" />
        <span className="nav-text">Cerrar Sesión</span>
      </div>
    </MenuDashboardContainer>
  );
};

export default MenuDashboardAdmin;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
export const MenuDashboardContainer = styled.div`
  z-index: 50;
  position: fixed;
  background-color: #7597f5;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50px;
  width: ${(props) => (props.isOpen ? "250px" : "50px")};

  padding-top: 40px;
  padding-bottom: 40px;
  transition: all 0.3s ease-in-out;
  .menu__user {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .user__menu {
      position: relative;
    }
  }
  .navLink {
    margin-left: 10px;
    /* width: 250px; */
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    text-decoration: none;
    color: white;
    font-size: 13px;
    margin-top: 40px;
    .iconOpen {
      ${(props) =>
        props.isOpen
          ? "transform: rotate(0deg); "
          : "transform: rotate(180deg);"}
      min-width: 25px;
      min-height: 25px;
      position: relative;
      color: white;
      margin-right: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
    .iconOpen:hover {
      transform: scale(1.4);
      transition: all 0.2s ease-in-out;
    }
    .spanOpen {
      font-size: 1.2rem;
      color: white;
      margin-right: 10px;
      cursor: pointer;
      overflow: hidden;
    }

    .icon {
      min-width: 25px;
      min-height: 25px;
      position: relative;
      color: white;
      margin-right: 10px;
      cursor: pointer;
    }

    .icon:hover {
      //effect light
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }

    .nav-text {
      white-space: nowrap;
      font-size: 0.9rem;
      color: white;
      margin-right: 10px;
      cursor: pointer;
      overflow: hidden;
    }
  }
  .navLink:hover {
    //transform scale y only side right

    ${(props) =>
      props.isOpen == false &&
      `
    .nav-text {
      position: absolute;
      //center text vertical
      top: -50%;
     
      left: 40px;
      color: white;
      overflow: visible;
      background-color: #7597f5;
      padding: 10px;
      border-radius: 0px 10px 10px 0px;
      
      transform: scaleX(1);
      transition: all 0.1s ease-in-out;
      z-index: 30;
    }
    `}
  }
  .hr {
    width: 100%;
    height: 2px;
    background-color: #ffffff36;
    margin-top: 10px;
  }
  ${mobile} {
    .navLink:hover {
      ${(props) =>
        props.isOpen == false &&
        `
      .nav-text {
        display: none;
      }
      `}
    }
  }
`;
