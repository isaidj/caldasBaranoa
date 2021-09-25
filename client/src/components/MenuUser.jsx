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

const MenuUser = () => {
  const urlWorking = useGlobalVariables().urlWorking;
  const auth = useAuth();
  const user = useAuth().user.user[0];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const { register, handleSubmit } = useForm();

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
          <FaRegUserCircle className="icon" />
        </div>
        <div className="user__menu">
          <div className="user__menu__items">
            <div
              onClick={() => OpenProfile()}
              className="user__menu__items__item"
            >
              <FaUserCircle />
              <p>{user.usuario}</p>
            </div>
            <div onClick={() => auth.logout()}>
              <FaSignOutAlt />
              <p>Salir</p>
            </div>
          </div>
        </div>
      </MenuContainer>
      <MenuProfile isOpen={isOpenProfile}>
        <form onSubmit={handleSubmit(updateUser)}>
          <h1>TUS DATOS</h1>
          <div className="form-group">
            <InputLogin
              {...register("usuario")}
              ref={null}
              className="form-control"
              type="text"
              placeholder="Usuario"
              defaultValue={user.usuario}
            />
          </div>
          <div className="form-group">
            <InputLogin
              {...register("password")}
              ref={null}
              type="password"
              className="form-control"
              placeholder="Contraseña"
              defaultValue={user.contrasena}
            />
          </div>
          <div className="form-group">
            <InputLogin
              {...register("nombre")}
              ref={null}
              className="form-control"
              type="text"
              placeholder="Nombre"
              //capitalize text
              style={{ textTransform: "capitalize" }}
              defaultValue={user.nombres}
            />
          </div>
          <div className="form-group">
            <InputLogin
              {...register("apellido")}
              ref={null}
              className="form-control"
              type="text"
              placeholder="Apellido"
              style={{ textTransform: "capitalize" }}
              defaultValue={user.apellidos}
            />
          </div>
          <div className="form-group">
            <label>Grado</label>
            <SelectLogin
              {...register("grado")}
              ref={null}
              className="form-control"
              type="number"
              placeholder="Grado"
              defaultValue={user.grado}
            >
              <option value="5">5° - Quinto grado</option>
              <option value="6">6° - Sexto grado</option>
              <option value="7">7° - Séptimo grado</option>
              <option value="8">8° - Octavo grado</option>
              <option value="9">9° - Noveno grado</option>
              <option value="10">10° - Decimo grado</option>
              <option value="11">11° -onceavo grado</option>
            </SelectLogin>
          </div>
          <div className="btn__group">
            <ButtonLogin onClick={() => closeProfile()}>Cancelar</ButtonLogin>
            <ButtonLogin type="submit">Actualizar</ButtonLogin>
          </div>
        </form>
      </MenuProfile>
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
  .user__img__container .icon {
    font-size: 2rem;

    color: #2b2d42;
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
    background-color: #edf2f4;
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
          font-size: 1.2rem;
          margin-bottom: 10px;
          cursor: pointer;
          font-weight: bold;
          margin: 0;
        }
      }
    }
  }
`;

const MenuProfile = styled.div`
  ${(props) => (props.isOpen ? "display: flex;" : "display: none;")}
  z-index: 30;

  justify-content: center;
  align-items: center;
  margin-top: -100px;
  background-color: rgba(0, 0, 0, 0.692);

  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: modal-login-overlay-animation 0.4s;
  @keyframes modal-login-overlay-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /*modal*/

    position: relative;
    width: 30%;
    height: 50%;

    background: linear-gradient(
      45deg,
      rgba(43, 45, 66, 1) 0%,
      rgba(141, 153, 174, 1) 99%
    );

    border-radius: 10px;
    animation: modal-login-animation 0.3s;
    outline: none;
    h1 {
      font-size: 1.4rem;
      color: #edf2f4;

      font-weight: bold;
    }
    label {
      font-size: 1rem;
      color: #edf2f4;

      font-weight: bold;
    }

    .btn__group {
      display: flex;
      gap: 10px;
    }
  }
  @keyframes modal-login-animation {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
