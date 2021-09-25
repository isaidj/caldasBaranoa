import React from "react";
import styled from "styled-components";
import { PageNoticeStyled } from "../pages/PagesStyled";

import { HtmlToText } from "./Funciones";

const PrevisualizadorNoticia = ({ img, titulo, subtitulo, cuerpo }) => {
  console.log(subtitulo);
  return (
    <PrevisualizadorStyled id="section-previsualizador">
      <div></div>
      <div>
        <h1>{titulo}</h1>
        <img
          src={
            img
              ? URL.createObjectURL(img)
              : "http://aquiporti.ec/dreamlab/wp-content/uploads/2020/02/default.jpg"
          }
        />
        <h2 dangerouslySetInnerHTML={{ __html: subtitulo }} />
        <p dangerouslySetInnerHTML={{ __html: HtmlToText(cuerpo) }} />
      </div>
      <div></div>
    </PrevisualizadorStyled>
  );
};

export default PrevisualizadorNoticia;

const PrevisualizadorStyled = styled(PageNoticeStyled)`
  #section-previsualizador {
    height: 600px;
  }
  strong {
    font-weight: bold;
  }
  h1 {
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  h2 {
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  img {
    width: 100%;
  }
`;
