import { useEffect } from "react";
import styled from "styled-components";
export const Tendencias = () => {
  return (
    <TendenciasStyled>
      <h1>Tendencias</h1>
    </TendenciasStyled>
  );
};
const TendenciasStyled = styled.div`
  h1 {
    color: #2b2d42;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
  p {
    color: #2b2d42;
    font-size: 1rem;
    text-align: center;
  }
`;

export const MasVistos = (data) => {
  const openNewNoticia = (idNoticia) => {
    //open noticia with react router
    window.location.href = `/noticia/${idNoticia}`;
    // window.open(`/noticia/${idNoticia}`);
  };
  return (
    <MasVistosStyled>
      <h1>Reciente</h1>
      {data.data.slice(0, 5).map((item, index) => {
        return (
          <div onClick={() => openNewNoticia(item.idpublicaciones)} key={index}>
            <span>{index + 1}</span>
            <p>{item.nom_publi}</p>
          </div>
        );
      })}
    </MasVistosStyled>
  );
};

const MasVistosStyled = styled.div`
  background-color: #2b2d42;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  div {
    display: flex;
    flex-direction: row;

    align-items: center;
    border-bottom: 1px solid #ffffff2f;
    cursor: pointer;
  }
  div:hover {
    background-color: #ffffff2f;
    border-radius: 10px;
  }

  span {
    color: #fff;
    font-size: 3rem;
    font-family: "Rampart One", cursive;
  }
  h1 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
  p {
    color: #fff;
    font-size: 1rem;
    text-align: center;
    margin: 0;
    margin-left: 1rem;
  }
`;
export const NuestraSeleccion = () => {
  useEffect(() => {
    window.FB.XFBML.parse();
  }, []);
  return (
    <NuestraSeleccionStyled>
      <h1>En nuestras redes</h1>
      {/* <div
        className="fb-post"
        data-href="https://www.facebook.com/250429628372458/photos/a.588304547918296/4263733970375317/"
        data-width="500"
        data-show-text="true"
      >
        <blockquote
          cite="https://www.facebook.com/250429628372458/photos/a.588304547918296/4263733970375317/?type=3"
          className="fb-xfbml-parse-ignore"
        >
          <p>
            #Egresados Osnaider de Jesús Desde niño siempre he sido inquieto, me
            apasionan las obras sociales, soy jugador de...
          </p>
          Publicado por{" "}
          <a href="https://www.facebook.com/Instituci&#xf3;n-Educativa-Francisco-Jos&#xe9;-de-Caldas-de-Baranoa-250429628372458/">
            Institución Educativa Francisco José de Caldas de Baranoa
          </a>{" "}
          en&nbsp;
          <a href="https://www.facebook.com/250429628372458/photos/a.588304547918296/4263733970375317/?type=3">
            Domingo, 5 de septiembre de 2021
          </a>
        </blockquote>
      </div>
      <div
        className="fb-post"
        data-href="https://www.facebook.com/AlcaldiaBaranoa/photos/a.217361405268613/1509783489359725"
        data-width="500"
        data-show-text="true"
        data-show-border="true"
      >
        <blockquote
          cite="https://www.facebook.com/AlcaldiaBaranoa/photos/a.217361405268613/1509783489359725/?type=3"
          className="fb-xfbml-parse-ignore"
        >
          <p>
            ¡Disfruta de manjares gastronómicos de #Sibarco en este festival🤤!
            Este 19 de septiembre, a partir de las 10:00 a.m.,...
          </p>
          Publicado por{" "}
          <a href="https://www.facebook.com/AlcaldiaBaranoa/">
            Alcaldía de Baranoa
          </a>{" "}
          en&nbsp;
          <a href="https://www.facebook.com/AlcaldiaBaranoa/photos/a.217361405268613/1509783489359725/?type=3">
            Lunes, 13 de septiembre de 2021
          </a>
        </blockquote>
      </div> */}
    </NuestraSeleccionStyled>
  );
};
const NuestraSeleccionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: #1a1a1a;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }

  .fb-post {
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 1rem;
  }
  .fb-xfbml-parse-ignore {
    max-width: 500px;
    width: 100%;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 1rem;
  }
`;
