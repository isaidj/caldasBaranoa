import styled, { css } from "styled-components";
import { Capitalize, HtmlToText, MaxWords } from "../../components/Funciones";

const openNewNoticia = (idNoticia) => {
  window.location.href = `/noticia/${idNoticia}`;
};
const urlImg = (name) => {
  return `https://caldasbaranoa.s3.amazonaws.com/${name}`;
};
const desktopStartWidth = 992;
// const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
const imgStyle = css`
  //border radius of the image
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;
const pStyle = css`
  border-left: 2px solid #949494;
  margin-top: 5px;
`;
export const BigPubli = (props) => {
  console.log(props);

  return (
    <BigPubliStyled>
      <h2 onClick={() => openNewNoticia(props.publi.idpublicaciones)}>
        {props.publi.nom_publi}
      </h2>
      <img
        onClick={() => openNewNoticia(props.publi.idpublicaciones)}
        src={urlImg(props.publi.img_portada)}
        alt="img"
      />
      <span className="categoria">{props.publi.categ_principal}</span>
      <p
        className="body"
        dangerouslySetInnerHTML={{
          __html: MaxWords(HtmlToText(props.publi.sub_publi), 400),
        }}
      />
    </BigPubliStyled>
  );
};
const BigPubliStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: all 0.2s ease;
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

  h2 {
    font-size: 1.9rem;
    font-weight: bold;
    backface-visibility: hidden;
  }
  h2:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  img {
    ${imgStyle}
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.02);

    transition: all 0.2s ease;
  }

  .body {
    ${pStyle}
    width: 100%;
    height: auto;
    text-align: center;
    font-size: 1rem;
    font-weight: normal;
    padding-left: 10px;
  }
`;

export const RielverticalTDI = (props) => {
  return (
    <RielverticalTDIstyled>
      <div className="container">
        <div>
          <h2 onClick={() => openNewNoticia(props.publi.idpublicaciones)}>
            {Capitalize(props.publi.nom_publi)}
          </h2>
          <span className="categoria">{props.publi.categ_principal}</span>
          <p
            className="body"
            dangerouslySetInnerHTML={{
              __html: MaxWords(HtmlToText(props.publi.sub_publi), 400),
            }}
          />
        </div>
        <img
          onClick={() => openNewNoticia(props.publi.idpublicaciones)}
          className="img"
          src={urlImg(props.publi.img_portada)}
          alt="img"
        />
      </div>
    </RielverticalTDIstyled>
  );
};
const RielverticalTDIstyled = styled.div`
  padding: 20px;
  transition: all 0.2s ease;
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
  .container {
    display: grid;
    grid-template-columns: 1.4fr 1fr;

    gap: 0px 10px;
    grid-auto-flow: row;
    grid-template-areas:
      "body img"
      "body img";
  }
  div {
    grid-area: body;
    display: flex;
    flex-direction: column;

    h2 {
      width: 100%;
      font-size: 1.2rem;
      font-weight: bold;
    }
    h2:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    .body {
      height: auto;
      text-align: left;
      font-size: 1rem;
      font-weight: normal;
    }
  }

  .img {
    grid-area: img;
    ${imgStyle}
    align-self: center;
    width: 100%;
    height: 165px;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.02);

    transition: all 0.2s ease;
  }

  ${mobile} {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas:
        "title title"
        "body img";
    }

    .title {
      grid-area: title;
      width: 100%;
      font-size: 1.2rem;
      font-weight: bold;
    }

    .body {
      grid-area: body;
      height: auto;
      text-align: left;
      font-size: 1rem;
      font-weight: normal;
    }

    .img {
      grid-area: img;
      ${imgStyle}

      width: 100%;
      height: 100%;
    }
  }
`;

export const RielverticalTIRounded = (props) => {
  return (
    <RielverticalTIRoundedstyled>
      <div>
        <img
          onClick={() => openNewNoticia(props.publi.idpublicaciones)}
          src={urlImg(props.publi.img_portada)}
          alt="img"
        />
        <span className="categoria">{props.publi.categ_principal}</span>
        <h2
          className="h2_titulo"
          onClick={() => openNewNoticia(props.publi.idpublicaciones)}
        >
          <span />
          {Capitalize(props.publi.nom_publi)}
        </h2>
      </div>
      {/* <p>{maxWords(item.des_publi, 150)}</p> */}
    </RielverticalTIRoundedstyled>
  );
};
const RielverticalTIRoundedstyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  height: auto;

  transition: all 0.2s ease;
  .categoria {
    //span to the left of box
    align-self: flex-start;
    width: auto;

    font-size: 0.8em;
    color: #ef233c;
    font-weight: bold;

    padding: 0px 2px;
  }
  div {
    display: flex;
    flex-direction: column;

    border-radius: 3px;
    padding: 10px;
    width: 100%;
    height: auto;
    display: flex;

    .h2_titulo {
      font-size: 1rem;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }

    h2:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    img {
      width: 100%;
      height: 110px;

      //cover img
      object-fit: cover;
      object-position: center;
      cursor: pointer;
      border-radius: 10px;
    }
    img:hover {
      transform: scale(1.02);

      transition: all 0.2s ease;
    }
  }
`;

export const RielverticalTIRounded2 = (props) => {
  return (
    <RielverticalTIRounded2styled>
      <div>
        <img
          onClick={() => openNewNoticia(props.publi.idpublicaciones)}
          src={urlImg(props.publi.img_portada)}
          alt="img"
        />
        <span className="categoria">{props.publi.categ_principal}</span>
        <h2
          className="h2_titulo"
          onClick={() => openNewNoticia(props.publi.idpublicaciones)}
        >
          <span />
          {Capitalize(props.publi.nom_publi)}
        </h2>
      </div>
      {/* <p>{maxWords(item.des_publi, 150)}</p> */}
    </RielverticalTIRounded2styled>
  );
};
const RielverticalTIRounded2styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  height: auto;
  padding: 20px;
  transition: all 0.2s ease;
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
  div {
    display: flex;
    flex-direction: column;
    border: 1px solid #d4d4d439;

    border-radius: 3px;
    padding: 10px;
    width: 100%;
    height: auto;
    display: flex;

    .h2_titulo {
      font-size: 1rem;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }

    h2:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    img {
      width: 100%;
      height: auto;
      max-height: 90px;
      //cover img
      object-fit: cover;
      object-position: center;
      cursor: pointer;
      border-radius: 10px;
    }
    img:hover {
      transform: scale(1.02);

      transition: all 0.2s ease;
    }
  }
`;
