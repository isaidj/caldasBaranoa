import React from "react";

import { useForm } from "react-hook-form";
import Axios from "axios";

import { useHistory } from "react-router-dom";
import useAuth from "../auth/useAuth";
import useGlobalVariables from "../global/useGlobalVariables";
import ButtonLogin from "./tagComponents/ButtonLogin";
import InputLogin from "./tagComponents/InputLogin";
import { ErrorLogin } from "./tagComponents/AlertsFunctions";
import Buttons, { ButtonRounded } from "./tagComponents/Buttons";

const Login = (props) => {
  const urlWorking = useGlobalVariables().urlWorking;
  const { register, handleSubmit } = useForm();

  const auth = useAuth();

  // let history = useHistory();

  const onLogin = async (d) => {
    Axios.post(urlWorking + "login", {
      usuario: d.usuario,
      password: d.password,
    }).then((data) => {
      if (data.data !== "error") {
        // console.log(data.data);
        auth.login(data.data);
        // history.push("/UserDashboard");
        //open new window
        // window.open("/UserDashboard/crear", "_blank");

        const closeModal = () => {
          props.closeModal();
        };
        closeModal();
      } else {
        ErrorLogin("Usuario o contraseña incorrectos", "Intenta de nuevo");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onLogin)} className="modal-login__form">
      {/* <Loading isLoading={loading}>
        <AiOutlineLoading />
      </Loading> */}
      <div className="form-group">
        <InputLogin
          {...register("usuario", { required: true })}
          ref={null}
          type="text"
          placeholder="USUARIO"
        />
      </div>
      <div className="form-group">
        <InputLogin
          {...register("password", { required: true })}
          ref={null}
          type="password"
          placeholder="CONTRASEÑA"
        />
      </div>

      <ButtonLogin type="submit">ENTRAR</ButtonLogin>
    </form>
  );
};

export default Login;
