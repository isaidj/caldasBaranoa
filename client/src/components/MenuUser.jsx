import { useState } from "react";
import useAuth from "../auth/useAuth";
import styled from "styled-components";
import { useForm } from "react-hook-form";
//icon user
import { FaUserCircle, FaSignOutAlt, FaRegUserCircle } from "react-icons/fa";
import InputLogin from "./tagComponents/InputLogin";
import SelectLogin from "./tagComponents/SelectLogin";
import ButtonLogin from "./tagComponents/ButtonLogin";
import Axios from "axios";
import useGlobalVariables from "../global/useGlobalVariables";
import user_example from "../images/user_example.png";
import AdminImg from "../images/AdminImg.jpg";
const urlImg = (name) => {
  return `https://caldasbaranoa.s3.amazonaws.com/${name}`;
};
const MenuUser = () => {
  const urlWorking = useGlobalVariables().urlWorking;
  const auth = useAuth();
  const user = useAuth().user.user[0];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const url_img_perfil = urlImg(user.url_img_perfil);
  const { register, handleSubmit } = useForm();
console.log(user);
  const updateUser = (data) => {
    // console.log(user.idusuario);
    Axios.post(urlWorking + "updateusuario", {
      //if data.usuario is "" then the value is user.usuario
      usuario: data.usuario || user.usuario,
      nombre: data.nombre || user.nombres,
      apellido: data.apellido || user.apellidos,
      contrasena: data.password || user.contrasena,
      grado: data.grado || user.grado,
      idusuario: user.idusuario,
    }).then((data) => {
      if (data.data !== "error") {
        // auth.login(data.data);
        auth.updateUser(urlWorking, user.idusuario);
        closeProfile();
      } else {
        console.log("hay un error");
      }
    });
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen);
  };
  const OpenProfile = () => {
    setIsOpenProfile(true);
    // console.log(isOpenProfile);
  };
  const closeProfile = () => {
    setIsOpenProfile(false);
  };
  // console.log(user);

  return (
    <>
      <MenuContainer isOpen={isOpen} isOpenProfile={isOpenProfile}>
        <div onClick={() => handleOpen()} className="user__img__container">
          <img
            src={user.url_img_perfil === undefined ? AdminImg : url_img_perfil}
            alt="user"
            className="img_icon"
          />
        </div>
        <div className="user__menu">
          <div className="user__menu__items">
            {/* <div
              onClick={() => OpenProfile()}
              className="user__menu__items__item"
            >
              <FaUserCircle />
              <p>{user.usuario}</p>
            </div> */}
            <div onClick={() => auth.logout()}>
              <FaSignOutAlt />
              <p>Salir</p>
            </div>
          </div>
        </div>
      </MenuContainer>
    </>
  );
};

export default MenuUser;

const MenuContainer = styled.div`
  position: relative;
  .user__img__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;

    border-radius: 50%;
    overflow: hidden;

    background-color: #ffffff;
    cursor: pointer;
  }
  .user__img__container .img_icon {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .user__menu {
    z-index: 20;
    position: absolute;
    top: 50px;
    right: 0;
    display: flex;
    transform-origin: top;

    ${(props) =>
      props.isOpen
        ? "transform: scaleY(100%) scaleX(100%);"
        : "transform: scaleY(0) scaleX(0%);"}

    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: auto;
    padding-top: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid #cccccc;
    transition: all 0.2s ease-in-out;
    .user__menu__items {
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 10px;
        border-bottom: 1px solid #cccccc;
        cursor: pointer;
        margin-bottom: 15px;
        p {
          font-size: 1rem;
          margin-bottom: 10px;
          cursor: pointer;
          font-weight: bold;
          margin: 0;
        }
        &:hover {
          color: #00a8ff;
          text-decoration: underline;
        }
      }
    }
  }
`;
