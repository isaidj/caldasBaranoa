import React from "react";

// import { CgClose, CgUser, CgChevronLeftO } from "react-icons/cg";
import { useForm } from "react-hook-form";
import Axios from "axios";

const Register = (props) => {
  // let subtitle;
  const { register, handleSubmit } = useForm();

  const changeToLogin = () => {
    props.changeSwitchLogReg();
  };

  const onRegistrar = (d) => {
    Axios.post("https://caldasbaranoa.herokuapp.com/api/insertusuario", {
      //uppercase the first letter of d.nombre and d.apellido

      usuario: d.usuario,
      password: d.password,
      nombre: d.nombre.charAt(0).toUpperCase() + d.nombre.slice(1),
      apellido: d.apellido.charAt(0).toUpperCase() + d.apellido.slice(1),
      grado: d.grado,
    }).then((data) => {
      if (data.data === "ok") {
        console.log(data);
        changeToLogin();
      } else {
        console.log("hay un error");
      }
    });
  };

  // const afterOpenModal = () => {
  //   subtitle.style.color = "#f00";
  // };

  return (
    <form onSubmit={handleSubmit(onRegistrar)} className="modal-login__form">
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
      <div className="form-group">
        <input
          {...register("nombre", { required: true })}
          className="form-control"
          type="text"
          placeholder="Nombre"
          //capitalize text
          style={{ textTransform: "capitalize" }}
        />
      </div>
      <div className="form-group">
        <input
          {...register("apellido", { required: true })}
          className="form-control"
          type="text"
          placeholder="Apellido"
          style={{ textTransform: "capitalize" }}
        />
      </div>
      <div className="form-group">
        <label>Grado</label>
        <select
          {...register("grado", { required: true })}
          className="form-control"
          type="number"
          placeholder="Grado"
        >
          <option value="5">5° - Quinto grado</option>
          <option value="6">6° - Sexto grado</option>
          <option value="7">7° - Séptimo grado</option>
          <option value="8">8° - Octavo grado</option>
          <option value="9">9° - Noveno grado</option>
          <option value="10">10° - Decimo grado</option>
          <option value="11">11° -onceavo grado</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary btn-submit">
        Registrarse
      </button>
    </form>
  );
};

export default Register;
