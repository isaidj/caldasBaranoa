//login modal
import React, { useRef } from "react";

import Modal from "react-modal";
import { CgClose, CgUser, CgChevronLeftO } from "react-icons/cg";

import Register from "./Register";
import Login from "./Login";
import useAuth from "../auth/useAuth";

const LoginModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [switchLogReg, setSwitchLogReg] = React.useState(false);
  const divLogin = useRef(null);
  const divRegister = useRef(null);
  const auth = useAuth();
  const changeSwitchLogReg = (bool) => {
    if (switchLogReg === bool) {
      divRegister.current.style.display = "flex";
      divLogin.current.style.display = "none";
    } else {
      divRegister.current.style.display = "none";
      divLogin.current.style.display = "flex";
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSwitchLogReg(false);
  };

  if (auth.isLogged()) {
    return (
      <h2
        onClick={() => {
          auth.logout();
        }}
      >
        Cerrar sesión
      </h2>
    );
  } else {
    return (
      <div>
        <CgUser className="btn-openModal" onClick={openModal} />

        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          // style={customStyles}
          className="modal-login"
          overlayClassName="modal-login-overlay"
          contentLabel="Example Modal"
        >
          <button className="modal-login__close" onClick={closeModal}>
            <CgClose />
          </button>
          <div>
            <div
              ref={divLogin}
              style={{ display: "flex" }}
              className="modal-login__container"
            >
              <h1>Inicio de sesion</h1>
              <Login closeModal={() => closeModal()} />
              <button
                className="modal-login__crearCuenta"
                onClick={() => changeSwitchLogReg(false)}
              >
                Crear una cuenta.
              </button>
            </div>
          </div>
          <div>
            <div
              ref={divRegister}
              style={{ display: "none" }}
              className="modal-login__container"
            >
              <button
                onClick={() => changeSwitchLogReg(true)}
                className="modal-register__back"
              >
                <CgChevronLeftO />
              </button>
              <h1>Registro</h1>
              {/* usuario,contraseña,nombre,apellido,grado */}
              <Register changeSwitchLogReg={() => changeSwitchLogReg(true)} />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
};

export default LoginModal;
