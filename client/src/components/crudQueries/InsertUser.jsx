//insert

import Axios from "axios";
import React from "react";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import useAuth from "../../auth/useAuth";
import firebaseStorage from "../../services/firebaseConfig";

export const InsertUser = ({ actualizar }) => {
  const { register, handleSubmit } = useForm();
  //create ref of firebase

  const auth = useAuth();
  const user = auth.getUser();
  // console.log(auth.getUser());
  // console.log(user);
  const insertData = (d) => {
    const img = d.imagen[0];
    //number random between 1000 and 5000
    const random = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    const nameImg = random + "__" + img.name;

    Axios.post("http://192.168.1.6:3001/api/insertPubli", {
      nombre: d.nombre,
      descripcion: d.descripcion,

      url_images: nameImg,

      areas: Number(d.areas),
      usuarios_id: auth.getUser().idusuario,
      // usuarios_idusuarios: ,
    }).then((data) => {
      if (data.data) {
        actualizar();
        // console.log(data.data.insertId);
        Axios.post("http://192.168.1.6:3001/api/insertImagen", {
          url_images: nameImg,
          idpublicaciones: data.data.insertId,
        }).then((data) => {
          if (data.data != "error") {
            // console.log(data.data);
            uploadImg(img, nameImg);
          } else {
            console.log("error");
          }
        });
      } else {
        console.log("hay un error");
      }
    });
  };

  const uploadImg = (img, name) => {
    console.log(img);
    console.log(img.name);
    const refStorage = firebaseStorage.ref(
      // /direccion/idusuario__idpublicacion__nombreimagen
      "/images/" + name
    );
    refStorage
      .put(img)
      .then(() => {
        console.log("uploaded");
      })
      .catch((error) => {
        console.log(error);
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
