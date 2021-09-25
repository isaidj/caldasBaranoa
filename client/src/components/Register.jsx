import React from "react";

//import alert from

// import { CgClose, CgUser, CgChevronLeftO } from "react-icons/cg";
import { useForm } from "react-hook-form";

import useGlobalVariables from "../global/useGlobalVariables";
import InputLogin from "./tagComponents/InputLogin";
import SelectLogin from "./tagComponents/SelectLogin";
import ButtonLogin from "./tagComponents/ButtonLogin";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

import styled from "styled-components";
import axios from "axios";

const Register = (props) => {
  const urlWorking = useGlobalVariables().urlWorking;
  // const MySwal = withReactContent(Swal);
  // let subtitle;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const changeToLogin = () => {
    props.setSwitchLogReg();
  };

  const onRegistrar = (d) => {
    axios
      .post(urlWorking + "insertusuario", {
        //uppercase the first letter of d.nombre and d.apellido
        usuario: d.usuario,
        password: d.password,
        nombre: d.nombre.charAt(0).toUpperCase() + d.nombre.slice(1),
        apellido: d.apellido.charAt(0).toUpperCase() + d.apellido.slice(1),
        grado: d.grado,
      })
      .then((data) => {
        if (data.data !== "error") {
          console.log(data);
          changeToLogin();
        } else {
          console.log("error");
          Error("Error", "Usuario ya registrado");
        }
      });
  };

  return (
    <FormStyle>
      <form onSubmit={handleSubmit(onRegistrar)} className="modal-login__form">
        {/* login */}
        <div className="form-group">
          <InputLogin
            type="text"
            placeholder="Usuario"
            {...register("usuario", { required: true, maxLength: 20 })}
            ref={null}
            //No se permiten numeros
          />
        </div>
        <div className="form-group">
          <InputLogin
            {...register("password", { required: true })}
            ref={null}
            type="password"
            className="form-control"
            placeholder="Contraseña"
          />
        </div>
        <div className="form-group">
          <InputLogin
            {...register("nombre", {
              required: true,
              pattern: {
                //only letters
                value: /^[a-zA-Z\s]*$/,
                message: "No se permiten numeros ni simbolos",
              },
            })}
            ref={null}
            className="form-control"
            type="text"
            placeholder="Nombre"
            //capitalize text
            style={{ textTransform: "capitalize" }}
          />
          {errors.nombre && (
            <p className="errorInput">{errors.nombre.message}</p>
          )}
        </div>
        <div className="form-group">
          <InputLogin
            {...register("apellido", {
              required: true,
              pattern: {
                //only letters
                value: /^[a-zA-Z\s]*$/,
                message: "No se permiten numeros ni simbolos",
              },
            })}
            ref={null}
            className="form-control"
            type="text"
            placeholder="Apellido"
            style={{ textTransform: "capitalize" }}
          />
          {errors.apellido && (
            <p className="errorInput">{errors.apellido.message}</p>
          )}
        </div>
        <div className="form-group">
          <label>Grado</label>
          <SelectLogin
            {...register("grado", { required: true })}
            ref={null}
            className="form-control"
            type="number"
            placeholder="Grado"
            defaultValue={"Selecciona tu grado"}
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
        <ButtonLogin type="submit">Registrarse</ButtonLogin>
      </form>
    </FormStyle>
  );
};

export default Register;
const FormStyle = styled.div`
  .errorInput {
    display: inline;
    color: #ef233c;
    font-size: 0.8rem;
    font-weight: bold;
  }
  .errorInput::before {
    content: "⚠ ";
  }
`;
