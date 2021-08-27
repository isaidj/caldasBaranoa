import React from "react";

// import Modal from "react-modal";
// import { CgClose, CgUser, CgChevronLeftO } from "react-icons/cg";
import { useForm } from "react-hook-form";
import Axios from "axios";

import { useHistory } from "react-router-dom";
import useAuth from "../auth/useAuth";

const Login = (props) => {
  // let subtitle;
  const { register, handleSubmit } = useForm();

  const auth = useAuth();

  let history = useHistory();

  const onLogin = (d) => {
    Axios.post("https://caldasbaranoa.herokuapp.com/api/login", {
      usuario: d.usuario,
      password: d.password,
    }).then((data) => {
      if (data !== null) {
        auth.login(data.data);
        history.push("/UserDashboard");
        const closeModal = () => {
          props.closeModal();
        };

        closeModal();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onLogin)} className="modal-login__form">
      {/* login */}
      <div className="form-group">
        <input
          {...register("usuario", { required: true })}
          className="form-control"
          type="text"
          placeholder="Usuario"
        />
      </div>
      <div className="form-group">
        <input
          {...register("password", { required: true })}
          type="password"
          className="form-control"
          placeholder="Contraseña"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-submit">
        Ingresar
      </button>
      {/* register a link */}
    </form>
  );
};

export default Login;
