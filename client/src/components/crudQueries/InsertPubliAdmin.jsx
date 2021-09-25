//insert
import Axios from "axios";
import React from "react";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import useAuth from "../../auth/useAuth";
import useGlobalVariables from "../../globalVariables/useGlobalVariables";

export const InsertPubliUser = ({ actualizar }) => {
  const urlWorking = useGlobalVariables().urlWorking;
  const { register, handleSubmit } = useForm();
  const auth = useAuth();
  // console.log(auth.getUser());
  console.log();
  const insertData = (d) => {
    Axios.post(urlWorking + "insertPubli", {
      nombre: d.nombre,
      descripcion: d.descripcion,
      // imagen: d.imagen,
      //string to number
      areas: Number(d.areas),
      usuarios_id: auth.getUser().idadmin,

      // usuarios_idusuarios: ,
    }).then((data) => {
      if (data.data === "ok") {
        console.log(data);
        actualizar();
      } else {
        console.log("hay un error");
      }
    });
  };
  //form react hook form
  return (
    <div>
      <form onSubmit={handleSubmit(insertData)} className="modal-login__form">
        {/* login */}
        <div className="form-group">
          <input
            {...register("nombre", { required: true })}
            className="form-control"
            type="text"
            placeholder="Nombre de la noticia"
          />
        </div>
        <div className="form-group">
          <textarea
            {...register("descripcion", { required: true })}
            className="form-control"
            type="textarea"
            placeholder="Descripcion noticia"
          />
        </div>
        <div className="form-group">
          <input
            {...register("imagen")}
            className="form-control"
            type="file"
            placeholder="Imagen"
          />
        </div>

        <div className="form-group">
          {/* select type number */}

          <select
            {...register("areas", { required: true })}
            className="form-control"
            type="number"
            placeholder="Area"
          >
            <option value="">Seleccione Area</option>
            <option value="1">Tecnologia</option>
            <option value="2">Sociales</option>
            <option value="3">Biologia</option>
            <option value="4">Matematica</option>
            <option value="5">Español</option>
            <option value="6">Quimica</option>
            <option value="7">Educacion Fisica</option>
          </select>

          {/* <div>
            <h3>Tipo de esquema</h3>
            <div className="tipo_esquema_container">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div> */}
        </div>

        <button type="submit" className="btn btn-primary btn-submit">
          Publicar
        </button>
        {/* register a link */}
      </form>
    </div>
  );
};
