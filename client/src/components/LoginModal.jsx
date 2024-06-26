//login modal
import React, { useRef } from "react";

import Modal from "react-modal";
//icon sign out
import { CgClose, CgUser, CgChevronLeftO } from "react-icons/cg";

import Register from "./Register";
import Login from "./Login";
import useAuth from "../auth/useAuth";
import styled from "styled-components";
import MenuUser from "./MenuUser";

import LoginImgRojo from "./../images/LoginImgRojo.svg";
import LoginImgRojoNoBack from "./../images/LoginImgRojoNoBack.svg";

const LoginModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [switchLogReg, setSwitchLogReg] = React.useState(false);
  const divLogin = useRef(null);
  const divRegister = useRef(null);
  const auth = useAuth();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSwitchLogReg(false);
  };

  if (auth.isLogged()) {
    return (
      // <h2
      //   onClick={() => {
      //     auth.logout();
      //   }}
      // >
      //   Cerrar sesión
      // </h2>
      <MenuUser />
    );
  } else {
    return (
      <div>
        <BtnOpenLogin className="BtnOpenLogin" onClick={openModal}>
          <CgUser className="icon__login" onClick={openModal} />

          <p>INICIAR SESIÓN</p>
        </BtnOpenLogin>

        <MyModal isOpen={modalIsOpen} switchLogReg={switchLogReg}>
          <div className="mymodal-login__container">
            <div className="modal-login">
              <button className="close" onClick={closeModal}>
                <CgClose />
              </button>
              <img src={LoginImgRojoNoBack} alt="login" />
              <span className="resto__img" />
              <div className="modal-login__content">
                <div className="modal-login__login">
                  <h1>INICIO DE SESIÓN</h1>
                  <Login closeModal={() => closeModal()} />
                  {/* <button
                    className="crearCuenta"
                    onClick={() => setSwitchLogReg(true)}
                  >
                    Crear una cuenta
                  </button> */}
                </div>
                {/* <div className="modal-login__login modal-login__register">
                  <button
                    className="modal-register__back"
                    onClick={() => setSwitchLogReg(false)}
                  >
                    <CgChevronLeftO />
                  </button>
                  <h1>REGISTRO</h1>
                  <Register setSwitchLogReg={() => setSwitchLogReg(false)} />
                </div> */}
              </div>
            </div>
          </div>
        </MyModal>
        {/* </ModalStyles> */}
      </div>
    );
  }
};

export default LoginModal;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const BtnOpenLogin = styled.div`
  display: flex;
  align-items: center;
  background-color: #ef233c;
  border: 1px solid transparent;
  color: #fff;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 1rem;
  font-weight: bold;
  width: 10rem;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    color: #ef233c;
    border: 1px solid #ef233c;
    transform: translateX(1px) translateY(1px);
  }

  .icon__login {
    font-size: 100%;
    margin-bottom: 5px;
  }
  p {
    padding: 0;
    margin: 0;
    margin-left: 5px;
  }

  ${mobile} {
    border: none;
    width: auto;
    border: 1px solid transparent;
    margin-right: 5px;
    &:hover {
      background-color: #ffffff;
    }
    .icon__login {
      font-size: 210%;
      margin-bottom: 5px;
    }
    p {
      display: none;
    }
  }
`;
const MyModal = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  z-index: 30;
  left: 0;
  top: 0;

  .mymodal-login__container {
    z-index: 100;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.212);

    .modal-login {
      z-index: 100;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      /* top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); */
      background-color: #043d862e;
      backdrop-filter: blur(20px);
      /* -webkit-backdrop-filter: blur(10px); */

      width: 500px;
      height: 700px;
      border-radius: 15px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
      /* 
      transition: all 0.2s ease-in-out; */
      .close {
        position: absolute;
        z-index: 30;
        top: 0;
        right: 0;
        padding: 10px;
        color: #ffffff;
        font-size: 2rem;
        outline: none;
        cursor: pointer;
      }
      img {
        z-index: 2;
        width: 100%;
        height: 300px;
        border-radius: 10%;
        overflow: hidden;
        object-fit: fill;
      }
      /* .resto__img {
        //this is a span
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
      } */
      .modal-login__content {
        z-index: 2;
        display: flex;
        flex-direction: row;
        justify-content: left;

        align-items: center;
        width: 100%;
        height: 100%;
        padding: 70px;
        background-color: #f3f3f3;

        border-radius: ${(props) =>
          props.switchLogReg ? "20% 0% 0% 0%" : "80% 0% 15px 15px"};
        transition: all 0.2s ease-in-out;
        overflow: hidden;
        //fill color the space

        .modal-login__login {
          display: ${(props) => (props.switchLogReg ? "none" : "flex")};

          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-width: 300px;
          height: auto;
          padding: 20px;
          transition: all 0.2s ease-in-out;
          h1 {
            font-size: 1.5rem;
            font-weight: bold;
          }
          .crearCuenta {
            margin-top: 20px;
            font-size: 1rem;
            font-weight: bold;
            color: #2b2b2b;
            text-decoration: none;
            transition: all 0.2s ease-in-out;
            background-color: transparent;
            border: none;
            outline: none;
            &:hover {
              cursor: pointer;
              color: #8d99ae;
              transform: translateX(1px) translateY(1px);
            }
          }
        }
        .modal-login__register {
          display: ${(props) => (props.switchLogReg ? "flex" : "none")};
          transition: all 0.2s ease-in-out;
          position: relative;
          .modal-register__back {
            position: absolute;
            top: 0;
            left: 0;

            color: #313131;
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 2rem;
          }
        }
      }
    }
  }
  ${mobile} {
    .mymodal-login__container {
      .modal-login {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        border-radius: 0;
        img {
          width: 50%;
          height: auto;
        }
        .modal-login__content {
          width: 100%;
          height: 100%;
          padding: 0;
          border-radius: ${(props) =>
            props.switchLogReg ? "20% 0% 0% 0%" : "60% 0% 0px 0px"};
          background-color: #f3f3f3;
        }
      }
    }
  }
`;
const ModalStyles = styled.div``;
