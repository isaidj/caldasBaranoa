import React, { useEffect, useState } from "react";
import useGlobalVariables from "../global/useGlobalVariables";
import axios from "axios";
import { PricipalSection } from "./TypeSections";
import styled from "styled-components";

const Areas = (idareas) => {
  window.document.title = "NC-Area";
  const urlWorking = useGlobalVariables().urlWorking;
  const [publicaciones, setPublicaciones] = useState([]);
  const id = idareas.match.params.idArea;

  // console.log(idareas);
  const fetchPublicArea = async (idArea) => {
    const response = await axios.get(urlWorking + "getPubliArea", {
      params: {
        idareas: idArea,
      },
    });
    // console.log(response.data);
    setPublicaciones(response.data);
  };
  useEffect(() => {
    fetchPublicArea(id);
  }, [id]);

  // console.log(publicaciones);
  if (publicaciones.length > 0) {
    return (
      <Container>
        <PricipalSection publi={publicaciones} />
      </Container>
    );
  } else {
    return <Container></Container>;
  }
};

export default Areas;
const Container = styled.div`
  min-height: 100vh;
`;
