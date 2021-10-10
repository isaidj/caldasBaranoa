//get

import React, { useState, useEffect } from "react";
import Axios from "axios";
import useAuth from "../../auth/useAuth";
import EditarUser from "./EditAllPubliUser";
import useGlobalVariables from "../../global/useGlobalVariables";
import { HtmlToText } from "../Funciones";
import { Table } from "../DataTable";
import styled from "styled-components";
import EditAllPubliUser from "./EditAllPubliUser";

const GetAllPubliUser = ({ actualizar }) => {
  const urlWorking = useGlobalVariables().urlWorking;
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);

  const userId = useAuth().getUser();

  useEffect(() => {
    Axios.get(urlWorking + "getAllPubliUser", {
      params: {
        id: userId.idusuario,
      },
    }).then((response) => {
      setData(response.data);
      // console.log(response);
    });
  }, [userId, update, actualizar, urlWorking]);

  const maxWords = (text, max) => {
    if (text.length > max) {
      return text.substr(0, max) + "...";
    } else {
      return text;
    }
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "PUBLICACIONES",
        columns: [
          {
            Header: "N°",
            accessor: "index",
          },
          {
            Header: "Fecha",
            accessor: "fecha",
          },
          {
            Header: "Nombre",
            accessor: "nom_publi",
          },
          {
            Header: "Subtitulo",
            accessor: "sub_publi",
          },
          { Header: "Descripcion", accessor: "des_publi" },
          { Header: "Acciones", accessor: "acciones" },
        ],
      },
    ],
    []
  );
  console.log("renderizado");
  return (
    <Div>
      <Table
        columns={columns}
        data={data.map((item, index) => ({
          ...item,
          index: index + 1,
          des_publi: maxWords(HtmlToText(item.des_publi), 100),
          acciones: (
            <EditAllPubliUser
              idPubli={item.idpublicaciones}
              nombre={item.nom_publi}
              subtitulo={item.sub_publi}
              descripcion={item.des_publi}
              fecha={item.fecha}
              actualizar={() => setUpdate(!update)}
            />
          ),
        }))}
      />
    </Div>
  );
};
export default GetAllPubliUser;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
const Div = styled.div`
  margin-left: 50px;
  ${mobile} {
    margin-left: 50px;
    margin-right: 0;
  }
`;
