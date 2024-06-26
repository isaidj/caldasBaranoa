import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import useAuth from "../../auth/useAuth";
// import useGlobalVariables from "../../globalVariables/useGlobalVariables";
// import UploadS3 from "../../services/UploadS3";
// import firebaseStorage from "../../services/firebaseConfig";
import styled, { keyframes } from "styled-components";
import { TiDelete } from "react-icons/ti";
import DrafJs from "../DrafJs";
import { InsertandoNoticia } from "../tagComponents/AlertsFunctions";
import useGlobalVariables from "../../global/useGlobalVariables";
import PrevisualizadorNoticia from "../PrevisualizadorNoticia";
import axios from "axios";
import Info from "../tagComponents/Info";

export const InsertPubliUser = () => {
  const [file, setFile] = React.useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [resetDrafjs, setResetDrafjs] = useState(false);

  const [switchCategoria, setSwitchCategoria] = useState(0);
  const auth = useAuth();
  const [nombrePublicacion, setNombrePublicacion] = useState(
    JSON.parse(localStorage.getItem("nombrePublicacion"))
  );
  const [subtitulo, setSubtitulo] = useState("");
  const [cuerpo, setCuerpo] = useState(null);
  const [maxLeghtWarning, setMaxLeghtWarning] = useState(false);
  const maxLengthSubtitle = 200;
  const [previsualizador, setPrevisualizador] = useState(false);
  const [areas, setAreas] = useState([]);
  const [secciones, setSecciones] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [etiquetas, setEtiquetas] = useState([]);

  useEffect(() => {
    try {
      localStorage.setItem(
        "nombrePublicacion",
        JSON.stringify(nombrePublicacion)
      );
    } catch (e) {
      console.log(e);
    }
    if (subtitulo) {
      if (subtitulo.length > maxLengthSubtitle) {
        setMaxLeghtWarning(true);
      } else {
        setMaxLeghtWarning(false);
      }
    }
  }, [nombrePublicacion, subtitulo]);
  useEffect(() => {
    getAreasSeccionesCategorias();
  }, []);

  console.log("primer renderizado");

  const getAreasSeccionesCategorias = async () => {
    const r_areas = await axios.get(urlWorking + "getAreas");
    const r_secciones = await axios.get(urlWorking + "getSecciones");
    const r_categorias = await axios.get(urlWorking + "getCategorias");
    setAreas(r_areas.data);
    setSecciones(r_secciones.data);
    setCategorias(r_categorias.data);
  };

  const urlWorking = useGlobalVariables().urlWorking;
  const insertData = (d) => {
    // console.log(d);
    const img = d.imagen[0];
    // console.log(img);
    const preNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const nameImg = preNumber + "__" + img.name;

    InsertandoNoticia(
      urlWorking,
      auth.getUser().idusuario,
      img,
      nameImg,
      d.nombre,
      subtitulo,
      cuerpo,
      d.areas,
      d.secciones,
      etiquetas
    );
  };

  const resetForm = () => {
    reset();
    setFile(null);
    setNombrePublicacion("");
    setResetDrafjs(!resetDrafjs);
  };
  const handleFileImg = (e) => {
    setFile(e.target.files[0]);
  };

  //form react hook form
  return (
    <DivContainer>
      {/* <Tiptap /> */}
      <FormContainer>
        <form onSubmit={handleSubmit(insertData)}>
          <h4>Titular</h4>
          <div className="form-group">
            <input
              {...register("nombre", { required: true })}
              className="form-control"
              type="text"
              placeholder="Nombre de la noticia"
              defaultValue={nombrePublicacion}
              onChange={(e) => setNombrePublicacion(e.target.value)}
            />
          </div>
          <h4>Subtitulo</h4>

          <h3 className="error_maxleght">
            {maxLeghtWarning ? "Limite de caracteres excedido" : ""}
          </h3>
          <DrafJs
            text={(text) => {
              setSubtitulo(text);
            }}
            tipoToolbar="subtitulo"
            reset={resetDrafjs}
          />
          <h4>Cuerpo</h4>
          <DrafJs
            text={(text) => {
              setCuerpo(text);
            }}
            tipoToolbar="cuerpo"
            reset={resetDrafjs}
          />

          <div className="form-group">
            <h1 className="portada">Imagen de portada</h1>
            <div className="file-input">
              <input
                {...register("imagen", { required: true })}
                className="inputfile"
                type="file"
                name="imagen"
                accept="image/*"
                onChange={handleFileImg}
              />
            </div>
          </div>
          <div className="img-preview">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "http://aquiporti.ec/dreamlab/wp-content/uploads/2020/02/default.jpg"
              }
              alt="imagen"
            />
          </div>

          <CategoriaContainer switch={switchCategoria}>
            {/* <h4>Secciones</h4> */}
            <div className="switch_container">
              <div>
                <h1>Secciones</h1>
                <div className="general">
                  <select
                    {...register("secciones", { required: false })}
                    className=""
                    type="number"
                    placeholder="General"
                  >
                    <option value="">Ninguna seleccionada</option>
                    {secciones.map((seccion) => (
                      <option
                        key={seccion.idsecciones}
                        value={seccion.idsecciones}
                      >
                        {seccion.nom_seccion}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <h1>Academido</h1>
                <div className="academico">
                  <select
                    {...register("areas", { required: false })}
                    className=""
                    type="number"
                    placeholder="Area"
                  >
                    <option value="">Ninguna seleccionada</option>
                    {areas.map((area) => (
                      <option key={area.idareas} value={area.idareas}>
                        {area.nom_area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Info information="Aquí debes seleccionar la seccion a la cual pertenece la noticia, no es necesario seleccionar una asignatura. " />
            </div>
          </CategoriaContainer>
          <EtiquetasContainer>
            <h4>Etiquetas</h4>
            <div className="etiquetas__seleccionadas">
              {etiquetas.length !== 0 ? (
                etiquetas.map((etiqueta, index) => (
                  <div
                    key={index + 1}
                    className="etiquetas etiqueta"
                    style={{ color: "#" + etiqueta.color }}
                    onClick={() => {
                      setCategorias((prevState) => [...prevState, etiqueta]);
                      //delete etiqueta item
                      setEtiquetas((prevState) =>
                        prevState.filter(
                          (item) =>
                            item.id_categorias !== etiqueta.id_categorias
                        )
                      );
                    }}
                  >
                    {etiqueta.nom_categoria}
                    <TiDelete />
                  </div>
                ))
              ) : (
                <div>No hay etiquetas seleccionadas</div>
              )}
            </div>
            <div className="etiquetas">
              {categorias.map((categoria, index) => (
                <div
                  key={index + 1}
                  className="etiqueta"
                  style={{ color: "#" + categoria.color }}
                  onClick={() => {
                    // console.log(categoria);
                    //add categoria to etiquetas array
                    setEtiquetas((prevState) => [...prevState, categoria]);
                    //delete categoria item
                    setCategorias((prevState) =>
                      prevState.filter(
                        (item) => item.id_categorias !== categoria.id_categorias
                      )
                    );
                  }}
                >
                  {categoria.nom_categoria}
                </div>
              ))}
            </div>
          </EtiquetasContainer>

          <button
            className="btn__publicar btn__previsualizar"
            onClick={() => setPrevisualizador(!previsualizador)}
          >
            <a href="#section-previsualizador">Previsualizar</a>
          </button>

          <button type="submit" className="btn__publicar">
            Publicar
          </button>
          {/* register a link */}
          <button className="btn__publicar btn__reset" onClick={resetForm}>
            Borrar noticia
          </button>
        </form>
      </FormContainer>
      {previsualizador && (
        <PrevisualizadorNoticia
          img={file}
          titulo={nombrePublicacion}
          subtitulo={subtitulo}
          cuerpo={cuerpo}
        />
      )}
    </DivContainer>
  );
};

const appearColor = keyframes`
  0% {
    background-color: #7597f5;
  }
  
  100% {
    //color normal
    background-color:#edf2f4;
  }
`;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;

const DivContainer = styled.div`
  scroll-behavior: smooth;
  overflow-y: scroll;
  height: 100vh;
  max-height: 95vh;
  background-color: #f8f8f8;
  border-radius: 10px;
  z-index: 1;
  box-shadow: 0px 0px 20px #2020204c;
  margin: 20px;
  margin-left: 60px;
  padding: 10px;
  width: 100%;
  ${mobile} {
    margin-left: 50px;
    margin-right: 0;
  }
`;
const FormContainer = styled.div`
  font-family: "Poppins", sans-serif;
  color: #424242;
  .file-input {
    border: 1px solid #b6b6b6;
    color: #363636;
    border-radius: 15px;
    padding: 10px;
    width: 400px;
  }

  form {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: 1rem;
  }
  .portada {
    font-size: 1.1rem;
  }

  .error_maxleght {
    font-size: 0.8rem;
    color: red;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .btn-submit {
    margin-top: 1rem;
  }
  .img-preview {
    width: 200px;

    height: auto;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .btn__publicar {
    align-self: center;
    background-color: #7597f5;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px;
    height: 44px;
    width: 200px;
    margin-top: 1rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #fff;
      color: #7597f5;
      border: 1px solid #7597f5;
    }
  }
  .btn__previsualizar {
    background-color: #a4f575;
    height: 44px;
    a {
      color: #fff;
    }
  }
  .btn__previsualizar:hover {
    background-color: #fff;
    color: #a4f575;
    border: 1px solid #a4f575;
    a {
      color: #a4f575;
    }
  }
  .btn__reset {
    display: flex;
    align-self: flex-end;
    align-content: center;
    justify-content: center;

    width: auto;
    height: 30px;
    background-color: #db4040;
    border: none;

    padding: 4px;
    &:hover {
      background-color: #fff;
      color: #db4040;
      border: 1px solid #db4040;
    }
  }
`;

const CategoriaContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  .switch_container {
    display: flex;
    flex-direction: row;
    h1 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-left: 1rem;
    }
  }
  .general,
  .academico {
    select {
      animation: ${appearColor} 0.5s ease-in-out;
      width: 300px;
      height: 40px;
      border-radius: 0px 10px 10px 10px;
      border: 1px solid #e7ecee;
      /* background-color: #edf2f4; */
      padding: 0.5rem;
      cursor: pointer;
    }
    select:focus {
      outline: none;
    }
  }
`;
const appearColor2 = keyframes`
  0% {
    background-color: #b3c7ff;
  }
  
  100% {
    //color normal
    background-color:#edf2f4;
  }
`;
const EtiquetasContainer = styled.div`
  width: 400px;
  margin-top: 1rem;
  h4 {
    margin-left: 0.5rem;
  }
  .etiquetas {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 1rem;
  }
  .etiqueta {
    margin: 0.1rem;
    padding: 0.1rem 0.2rem;

    border-radius: 10px;
    border: 1px solid #c9cfd1;

    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
  }
  .etiquetas__seleccionadas {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;

    border-radius: 10px;
    border: 1px solid #c9cfd1;
    color: #a5a5a5;
    padding: 0.5rem;
    margin-top: 1rem;
    min-height: 3rem;

    .etiquetas {
      align-items: center;
      transform-origin: center;
      //aniimacion de aparecer
      animation: ${appearColor2} 0.7s ease-in-out;
    }
  }
`;
