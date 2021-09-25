import axios from "axios";
import React, { useEffect } from "react";
import useGlobalVariables from "../global/useGlobalVariables";
import { Esquema1, Esquema2, Esquema3, Esquema4 } from "./EsquemasStyled";

import styled from "styled-components";
import { useHistory } from "react-router";
import {
  BigPubli,
  RielverticalTDI,
  RielverticalTIRounded,
  RielverticalTIRounded2,
} from "../pages/Rieles/RielsVertical";

const urlImg = (name) => {
  return `https://caldasbaranoa.s3.amazonaws.com/${name}`;
};
const Esquema = ({ tipo, item }) => {
  const urlWorking = useGlobalVariables().urlWorking;
  const history = useHistory();

  const maxWords = (text, max) => {
    if (text.length > max) {
      return text.substr(0, max) + "...";
    } else {
      return text;
    }
  };
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const openNewNoticia = (idNoticia) => {
    //open noticia with react router
    // history.push(`/noticia/${idNoticia}`);

    window.location.href = `/noticia/${idNoticia}`;
    // window.open(`/noticia/${idNoticia}`);
  };
  //TIPOS DE ESQUEMAS DE PUBLICACIONES
  switch (tipo) {
    case 1:
      return (
        //TITULO=>IMAGEN=>DESCRIPCION
        <BigPubli publi={item} />
      );

    case 2:
      return (
        //TITULO=>DESCRIPCION=>IMAGEN

        <RielverticalTDI publi={item} />
      );

    case 3:
      return (
        //IMAGEN=>TITULO
        <RielverticalTIRounded publi={item} />
      );
    case 4:
      return (
        //IMAGEN=>TITULO
        <RielverticalTIRounded2 publi={item} />
      );

    default:
  }
};

export default Esquema;

const ContainerStyled = styled.div`
  .categoria {
    //span to the left of box
    align-self: flex-start;
    width: auto;

    font-size: 0.8em;
    color: #ef233c;
    font-weight: bold;

    border-radius: 5px;
    padding: 0px 2px;
  }
`;
