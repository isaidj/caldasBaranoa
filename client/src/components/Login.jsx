import React, { useEffect, useRef } from "react";

// import Modal from "react-modal";
// import { CgClose, CgUser, CgChevronLeftO } from "react-icons/cg";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";

const Login = () => {
  // let subtitle;
  const { register, handleSubmit } = useForm();

  const divLogin = useRef(null);
  const divRegister = useRef(null);

  let history = useHistory();

  const onLogin = (d) => {
    Axios.post("http://192.168.1.6:3001/api/login", {
      usuario: d.usuario,
      password: d.password,
    }).then((data) => {
      if (data !== null) {
        console.log("redireccionar");
        history.push("/UserDashboard/:" + data.nombre);
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
