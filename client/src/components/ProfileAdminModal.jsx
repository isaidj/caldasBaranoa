import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../auth/useAuth";
import useGlobalVariables from "../global/useGlobalVariables";
import styled from "styled-components";
import ButtonLogin from "./tagComponents/ButtonLogin";
import SelectLogin from "./tagComponents/SelectLogin";
import InputLogin from "./tagComponents/InputLogin";
import { HiCamera } from "react-icons/hi";
import UploadS3 from "../services/UploadS3";
import user_example from "../images/user_example.png";

const ProfileAdminModal = ({ isOpen, handleOpenMenu }) => {
  const urlWorking = useGlobalVariables().urlWorking;
  const auth = useAuth();
  const user = useAuth().user.user[0];
  const [file, setFile] = useState(null);
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const { register, handleSubmit } = useForm();

  const updateUser = (data) => {
    // console.log(d);

    console.log(file);
    const img = file;
    const preNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const nameImg = preNumber + "__" + img.name;
    axios
      .post(urlWorking + "updateusuario", {
        //if data.usuario is "" then the value is user.usuario
        usuario: data.usuario || user.usuario,
        nombre: data.nombre || user.nombres,
        apellido: data.apellido || user.apellidos,
        contrasena: data.password || user.contrasena,
        grado: data.grado || user.grado,
        idusuario: user.idusuario,
        url_img_perfil: nameImg || user.url_img_perfil,
      })
      .then((data) => {
        if (data.data !== "error") {
          // auth.login(data.data);

          UploadS3(img, nameImg, handleOpenMenu());
          setTimeout(() => {
            auth.updateUser(urlWorking, user.idusuario);
          }, 1000);
        } else {
          console.log("hay un error");
        }
      });
  };
  const handleFileImg = (e) => {
    setFile(e.target.files[0]);
    console.log("EJECUTANDO HANDLEFILEIMG");
  };

  return (
    <MenuProfile isOpen={isOpen}>
      <form onSubmit={handleSubmit(updateUser)}>
        <h1>TUS DATOS</h1>

        <div className="img-preview">
          <img
            //doble condicional ternario
            src={
              file === null
                ? user.url_img_perfil !== null
                  ? urlImg(user.url_img_perfil)
                  : user_example
                : URL.createObjectURL(file)
            }
            alt="imagen"
          />
        </div>
        <div className="file-input">
          <input
            {...register("imagen")}
            id="file"
            type="file"
            name="imagen"
            accept="image/*"
            className="file"
            onChange={handleFileImg}
          />
          <label htmlFor="file">
            <HiCamera />
            Cambia de foto
          </label>
        </div>
        <div className="form-group">
          <InputLogin
            color="#7597f5"
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
            color="#7597f5"
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
            color="#7597f5"
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
            color="#7597f5"
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
            backgroundColor="#7597f5"
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
          <ButtonLogin
            backgroundColor="#7597f5"
            onClick={() => handleOpenMenu()}
            type="button"
          >
            Cancelar
          </ButtonLogin>
          <ButtonLogin backgroundColor="#7597f5" type="submit">
            Actualizar
          </ButtonLogin>
        </div>
      </form>
    </MenuProfile>
  );
};

export default ProfileAdminModal;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
const MenuProfile = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};

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
    background-color: #f3f3f3;
    position: relative;
    width: 30%;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;

    border-radius: 10px;
    animation: modal-login-animation 0.3s;
    outline: none;
    h1 {
      font-size: 1.4rem;
      color: #2c2c2c;

      font-weight: bold;
    }
    label {
      font-size: 1rem;
      color: #edf2f4;
      cursor: pointer;
      font-weight: bold;
      &:hover {
        text-decoration: underline;
      }
    }

    .btn__group {
      display: flex;
      gap: 10px;
    }
    .file-input {
      .file {
        display: none;
      }
      label {
        display: flex;
        align-items: center;
        color: #030303;
        width: 100%;
        height: 40px;
        font-size: 0.8rem;
        gap: 3px;
      }
    }

    .img-preview {
      width: 100px;
      height: 100px;
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
        overflow: hidden;
      }
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
  ${tablet} {
    form {
      width: 80%;
    }
  }
  ${mobile} {
    form {
      width: 100%;
    }
  }
`;
