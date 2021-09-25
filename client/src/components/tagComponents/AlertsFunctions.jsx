import axios from "axios";

import Swal from "sweetalert2";

import UploadS3 from "../../services/UploadS3";
// import withReactContent from "sweetalert2-react-content";
//swwwtalert2 alers

export const InsertandoNoticia = (
  urlWorking,
  auth,
  img,
  nameImg,
  nombrepubli,
  subtitulo,
  cuerpo,
  areas,
  secciones,
  etiquetas
) => {
  console.log(
    etiquetas.length > 0 ? etiquetas[0].nom_categoria : "no etiqueta"
  );
  Swal.fire({
    title: "Publicando",
    html: "Espera un momento",
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
  });
  axios
    .post(urlWorking + "insertPubli", {
      usuarios_id: auth,
      img_portada: nameImg,
      nombre: nombrepubli,
      subtitulo: subtitulo,
      descripcion: cuerpo,

      categoria: etiquetas.length > 0 ? etiquetas[0].nom_categoria : "",
      areas: Number(areas) === 0 ? null : areas,
      secciones: Number(secciones) === 0 ? null : secciones,
      fecha: new Date(),
    })
    .then((data) => {
      if (data.data !== "error") {
        insertarEtiquetas(data.data.insertId);

        UploadS3(img, nameImg);
      } else {
        Error(
          "Comprueba los datos",
          "Quizá se te ha olvidado escribir en algun campo"
        );
        console.log(data);
      }
    });
  console.log(etiquetas);
  const insertarEtiquetas = (insertId) => {
    etiquetas.map((item) => {
      axios
        .post(urlWorking + "insertPubliCateg", {
          idpublicaciones: insertId,
          idcategorias: Number(item.id_categorias),
        })
        .then((data) => {
          if (data.data !== "error") {
          } else {
            console.log("Error: " + data.data);
          }
        });
    });
  };
};

export const ActualizandoNoticia = (
  urlWorking,
  auth,
  idpublicaciones,
  img,
  nameImg,
  nombrepubli,
  subtitulo,
  cuerpo,
  areas,
  secciones,
  etiquetas
) => {
  Swal.fire({
    title: "Publicando",
    html: "Espera un momento",
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
  });
  axios
    .post(urlWorking + "updatePubli", {
      usuarios_id: auth,
      idpublicaciones: idpublicaciones,
      img_portada: nameImg,
      nombre: nombrepubli,
      subtitulo: subtitulo,
      descripcion: cuerpo,
      categoria: etiquetas[0].nom_categoria,
      areas: Number(areas),
      secciones: Number(secciones),
      fecha: new Date(),
    })
    .then((data) => {
      if (data.data !== "error") {
        deleteEtiquetas(idpublicaciones);

        UploadS3(img, nameImg);
      } else {
        console.log(data);
      }
    });
  console.log(etiquetas);
  const deleteEtiquetas = () => {
    axios
      .delete(urlWorking + "deletePubliCateg", {
        data: {
          idpublicaciones: idpublicaciones,
        },
      })
      .then((data) => {
        if (data.data !== "error") {
          insertarEtiquetas(idpublicaciones);
        } else {
          console.log(data);
        }
      });
  };

  const insertarEtiquetas = (idpublicaciones) => {
    etiquetas.map((item) => {
      axios
        .post(urlWorking + "insertPubliCateg", {
          idpublicaciones: idpublicaciones,
          idcategorias: Number(item.id_categorias),
        })
        .then((data) => {
          if (data.data !== "error") {
          } else {
            console.log("Error: " + data.data);
          }
        });
    });
  };
};
export const Success = (title, text) => {
  const titleAlert = title || "Exito";
  Swal.fire({
    title: titleAlert,
    text: text || "Operacion realizada con exito",
    icon: "success",
    confirmButtonText: "Ok",
  });
};
export const ErrorLogin = (title, text) => {
  const titleAlert = title || "Error";
  Swal.fire({
    title: titleAlert,
    text: text || "Ocurrio un error",
    icon: "error",
    confirmButtonText: "Ok",
    confirmButtonColor: "#2b2d42 ",
  });
};
export const Delete = (urlWorking, title, text, idPubli, actualizar) => {
  const titleAlert = title || "Eliminar";
  Swal.fire({
    title: titleAlert,
    text: text || "Esta seguro de eliminar este registro",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#2b2d42 ",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.value) {
      console.log(idPubli);
      axios
        .delete(urlWorking + "deletePubli", {
          data: {
            idpublicaciones: idPubli,
          },
        })
        .then((data) => {
          if (data.data !== "error") {
            actualizar();
            Success("Eliminado", "Registro eliminado con exito");
          } else {
            console.log("hay un error");
          }
        });
    }
  });
};
export const Warning = (title, text) => {
  const titleAlert = title || "Advertencia";
  Swal.fire({
    title: titleAlert,
    text: text || "Esta seguro de eliminar este registro",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#2b2d42 ",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si",
    cancelButtonText: "No",
  });
};

export const Error = (title, text) => {
  const titleAlert = title || "Error";
  Swal.fire({
    title: titleAlert,
    text: text || "Ocurrio un error",
    icon: "error",
    confirmButtonText: "Ok",
    confirmButtonColor: "#2b2d42 ",
  });
};
