import React, { useEffect } from "react";
import { Table } from "../DataTable";
import styled from "styled-components";
import { formatearFecha, HtmlToText, MaxWords } from "../Funciones";
import EditAllPubliUser from "./EditAllPubliUser";
import axios from "axios";
import useGlobalVariables from "../../global/useGlobalVariables";
const GetAllPubliAdmin = () => {
  const urlWorking = useGlobalVariables().urlWorking;
  const [data, setData] = React.useState([]);
  const [update, setUpdate] = React.useState(false);

  useEffect(() => {
    axios.get(urlWorking + "getAllPubliAdmin").then((response) => {
      setData(response.data);
      // console.log(response);
    });
  }, [update, urlWorking]);
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
            Header: "Usuario",
            accessor: "fullName",
          },
          {
            Header: "Nombre",
            accessor: "nom_publi",
          },
          {
            Header: "Subtitulo",
            accessor: "sub_publi",
          },

          {
            Header: "Fecha",
            accessor: "fecha",
          },
          {
            Header: "Categoria",
            accessor: "categ_principal",
          },
        ],
      },
    ],
    []
  );

  return (
    <Div>
      <Table
        columns={columns}
        data={data.map((item, index) => ({
          ...item,
          index: index + 1,
          fecha: formatearFecha(item.fecha),
          sub_publi: MaxWords(HtmlToText(item.des_publi), 100),
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

export default GetAllPubliAdmin;
const Div = styled.div`
  margin-left: 50px;
`;
