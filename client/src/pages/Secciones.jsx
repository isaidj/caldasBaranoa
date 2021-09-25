import axios from "axios";
import React, { useEffect } from "react";
import useGlobalVariables from "../global/useGlobalVariables";
import { PricipalSection } from "./TypeSections";
import styled, { keyframes } from "styled-components";
const Secciones = (props) => {
  const id = props.match.params.id;

  const urlWorking = useGlobalVariables().urlWorking;

  const [publicaciones, setPublicaciones] = React.useState([]);

  useEffect(() => {
    fetchSecciones(id);
  }, [id]);

  const fetchSecciones = async (idsecc) => {
    const response = await axios.get(urlWorking + "getPubliSeccion", {
      params: {
        secciones_idsecciones: idsecc,
      },
    });

    setPublicaciones(response.data);
  };
  return (
    <Container>
      {/* <h1>{nombre_Section}</h1> */}
      <PricipalSection publi={publicaciones} />
    </Container>
  );
};

export default Secciones;
const opacity = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;
const Container = styled.div`
  min-height: 100vh;

  animation: ${opacity} 0.2s ease-in-out;
`;
