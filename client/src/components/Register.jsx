import React, { useContext } from "react";

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
import AdminDashboardContext from "../context/ContextAdminDashboard";
import { Success } from "./tagComponents/AlertsFunctions";

const Register = (props) => {
  const { update, setUpdate } = useContext(AdminDashboardContext);
  const urlWorking = useGlobalVariables().urlWorking;
  // const MySwal = withReactContent(Swal);
  // let subtitle;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegistrar = (d) => {
    axios
      .post(urlWorking + "insertusuario", {
        //uppercase the first letter of d.nombre and d.apellido
        url_img_perfil:"userExample.png",
        usuario: d.usuario,
        password: d.password,
        nombre: d.nombre.charAt(0).toUpperCase() + d.nombre.slice(1),
        apellido: d.apellido.charAt(0).toUpperCase() + d.apellido.slice(1),
        grado: d.grado,
      })
      .then((data) => {
        if (data.data !== "error") {
          console.log(data);
          setUpdate(!update);
          Success("Registro","usuario ingresado correctamente");
        } else {
          console.log("error");
          Error("Error", "Usuario ya registrado");
        }
      });
  };

  return (
    <FormStyle>
      <h4>Crear nuevo usuario</h4>
      <form onSubmit={handleSubmit(onRegistrar)}>
        {/* login */}
        <div className="form-group">
          <InputLogin
            color="#7597f5"
            type="text"
            placeholder="Usuario"
            {...register("usuario", { required: true, maxLength: 20 })}
            ref={null}
            //No se permiten numeros
          />
        </div>
        <div className="form-group">
          <InputLogin
            color="#7597f5"
            {...register("password", { required: true })}
            ref={null}
            type="password"
            className="form-control"
            placeholder="Contraseña"
          />
        </div>
        <div className="form-group">
          <InputLogin
            color="#7597f5"
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
            color="#7597f5"
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
            backgroundColor="#7597f5"
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
        <ButtonLogin backgroundColor="#7597f5" type="submit">
          Registrarse
        </ButtonLogin>
      </form>
    </FormStyle>
  );
};

export default Register;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
const FormStyle = styled.div`
  height: 100%;
  border-radius: 15px;
  box-shadow: 0px 0px 20px #2020204c;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 90%;
    max-height: auto;
    padding: 0px 10px 10px 10px;
  }
  h4 {
    background-color: #7597f5;
    border-radius: 15px 15px 0px 0px;
    color: white;
    height: 50px;
    width: 100%;
    text-align: center;
    padding-top: 10px;
  }
  .errorInput {
    display: inline;
    color: #ef233c;
    font-size: 0.8rem;
    font-weight: bold;
  }
  .errorInput::before {
    content: "⚠ ";
  }
  ${mobile} {
    width: 95%;
    margin: 0 auto;
  }
`;
