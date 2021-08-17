import React, { useEffect, useRef } from "react";

import Modal from "react-modal";
import { CgClose, CgUser, CgChevronLeftO } from "react-icons/cg";
import { useForm } from "react-hook-form";
import Axios from "axios";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const Register = () => {
  // let subtitle;
  const { register, handleSubmit } = useForm();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [switchLogReg, setSwitchLogReg] = React.useState(false);
  const divLogin = useRef(null);
  const divRegister = useRef(null);

  const onRegistrar = (d) => {
    console.log(d);
    Axios.post("http://192.168.1.6:3001/api/insertusuario", {
      usuario: d.usuario,
      password: d.password,
      nombre: d.nombre,
      apellido: d.apellido,
      grado: d.grado,
    }).then(() => {
      alert("Insertion realizada");
    });
    console.log(d);
  };

  const onLogin = (d) => {};
  const openModal = () => {
    setIsOpen(true);
  };

  // const afterOpenModal = () => {
  //   subtitle.style.color = "#f00";
  // };

  const closeModal = () => {
    setIsOpen(false);
    setSwitchLogReg(false);
  };

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
        />
      </div>
      <div className="form-group">
        <input
          {...register("apellido", { required: true })}
          className="form-control"
          type="text"
          placeholder="Apellido"
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
