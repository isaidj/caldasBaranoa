import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import React, { useRef } from "react";
import Modal from "react-modal";

import { Button as ButtonM } from "@material-ui/core";

import { CgClose } from "react-icons/cg";

import { useForm } from "react-hook-form";
import Axios from "axios";

const EditarUser = ({
  idPubli,
  nombre,
  descripcion,
  areas,
  idUser,

  actualizar,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [confirmIsOpen, setConfirmIsOpen] = React.useState(false);
  const modal = useRef(null);
  const { register, handleSubmit } = useForm();
  const divLogin = useRef(null);
  const modalConfim = useRef(null);

  const insertData = (d) => {
    Axios.post("https://caldasbaranoa.herokuapp.com/api/updateUserPubli", {
      nombre: d.nombre,
      descripcion: d.descripcion,
      // imagen: d.imagen,
      //string to number
      areas: Number(d.areas),
      usuarios_id: idUser,
      idpublicaciones: idPubli,

      // usuarios_idusuarios: ,
    }).then((data) => {
      if (data.data === "ok") {
        closeModal();
        actualizar();

        console.log(data);
      } else {
        console.log("hay un error");
      }
    });
  };
  const deleteRow = () => {
    Axios.delete("https://caldasbaranoa.herokuapp.com/api/deletePubli", {
      data: {
        idpublicaciones: idPubli,
      },
    }).then((data) => {
      if (data.data === "ok") {
        actualizar();
        closeModalConfim();
      } else {
        console.log("hay un error");
      }
    });
  };

  const openModal = () => {
    setIsOpen(true);
  };
  // console.log(
  //   "idPubli: " + idPubli,
  //   "nombre: " + nombre,
  //   "descripcion: " + descripcion,
  //   "areas: " + areas,
  //   "idUser: " + idUser
  // );
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModalConfim = () => {
    setConfirmIsOpen(true);
  };
  const closeModalConfim = () => {
    setConfirmIsOpen(false);
  };

  return (
    <div>
      <Modal
        ref={modal}
        ariaHideApp={false}
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        className="modal-login"
        overlayClassName="modal-login-overlay"
        contentLabel="Example Modal"
      >
        <button className="modal-login__close" onClick={closeModal}>
          <CgClose />
        </button>
        <div>
          <div
            ref={divLogin}
            style={{ display: "flex" }}
            className="modal-login__container"
          >
            <h1>Actualizar</h1>

            <form
              onSubmit={handleSubmit(insertData)}
              className="modal-login__form"
            >
              {/* login */}
              <div className="form-group">
                <input
                  {...register("nombre", { required: true })}
                  className="form-control"
                  type="text"
                  placeholder="Nombre de la noticia"
                  defaultValue={nombre}
                />
              </div>
              <div className="form-group">
                <textarea
                  {...register("descripcion", { required: true })}
                  className="form-control"
                  type="textarea"
                  placeholder="Descripcion noticia"
                  defaultValue={descripcion}
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
                  defaultValue={areas}
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
                Actualizar
              </button>
              {/* register a link */}
            </form>
          </div>
        </div>
      </Modal>
      <Modal
        ref={modalConfim}
        ariaHideApp={false}
        isOpen={confirmIsOpen}
        className="modal-login"
      >
        <div className="modal-confim">
          <div className="modal-confim__container">
            <h1>¿Estas seguro de eliminar la publicacion?</h1>
            <div className="modal-confim__container--buttons">
              <button className="btn btn-primary" onClick={deleteRow}>
                Si
              </button>
              <button className="btn btn-primary" onClick={closeModalConfim}>
                No
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <ButtonM
        onClick={openModal}
        //small button danger
        variant="contained"
        color="primary"
        size="small"
        // style={{ margin: "5px", backgroundColor: "#d77a3c" }}
        startIcon={<Edit />}
      >
        Editar
      </ButtonM>
      <ButtonM
        //small button danger delete
        variant="contained"
        color="secondary"
        style={{ marginLeft: "5px", backgroundColor: "#d22519" }}
        size="small"
        onClick={openModalConfim}
      >
        <Delete />
      </ButtonM>
    </div>
  );
};

export default EditarUser;
