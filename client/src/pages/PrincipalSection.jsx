import React from "react";
import styled from "styled-components";
import { HtmlToText } from "../components/Funciones";
import { RielTipoRow } from "./Rieles/RielsHorizontal";

const urlImg = (name) => {
  return `https://caldasbaranoa.s3.amazonaws.com/${name}`;
};

const PrincipalSection = (props) => {
  const { publi } = props;

  // const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const maxWords = (text, max) => {
    if (text.length > max) {
      return text.substr(0, max) + "...";
    } else {
      return text;
    }
  };

  const openNewNoticia = (idNoticia) => {
    //open noticia with react router
    window.location.href = `/noticia/${idNoticia}`;
    // window.open(`/noticia/${idNoticia}`);
  };
  return (
    <>
      <PrincipalSectionDiv>
        <article className="principal">
          {publi.slice(0, 1).map((publi, index) => (
            <div className="img" key={index}>
              <img
                onClick={() => openNewNoticia(publi.idpublicaciones)}
                src={urlImg(publi.img_portada)}
                alt="publi"
              />
              <div className="title">
                <a href={`/noticia/${publi.idpublicaciones}`}>
                  <h1>{publi.nom_publi}</h1>
                </a>

                <p
                  className="subtitulo"
                  dangerouslySetInnerHTML={{
                    __html: maxWords(HtmlToText(publi.sub_publi), 600),
                  }}
                />
              </div>
            </div>
          ))}
        </article>
        <section className="relevantes">
          {publi.slice(1, 2).map((publi, index) => (
            <article className="title" key={index}>
              <img
                onClick={() => openNewNoticia(publi.idpublicaciones)}
                src={urlImg(publi.img_portada)}
                alt="publi"
              />
              <a href={`/noticia/${publi.idpublicaciones}`}>
                <h1 onClick={() => openNewNoticia(publi.idpublicaciones)}>
                  {publi.nom_publi}
                </h1>
              </a>
            </article>
          ))}
          {publi.slice(2, 4).map((publi, index) => (
            <article className="title title_noImg" key={index}>
              <h1 onClick={() => openNewNoticia(publi.idpublicaciones)}>
                {publi.nom_publi}
              </h1>
            </article>
          ))}
        </section>
      </PrincipalSectionDiv>
      <RielTipoRow publi={publi.slice(4, 8)} />
    </>
  );
};

export default PrincipalSection;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
const PrincipalSectionDiv = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 0.8fr;
  grid-template-rows: auto 0.5fr;
  grid-auto-columns: 1fr;
  gap: 10px 10px;
  grid-auto-flow: row;
  grid-template-areas: "principal relevantes";
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;

  .principal {
    grid-area: principal;

    .img {
      position: relative;
      height: 100%;
      img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        //shadow inverse
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.192);
        cursor: pointer;
      }

      .title {
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: column;
        padding: 30px;
        border-radius: 10px;
        width: 100%;

        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.8379726890756303) 0%,
          rgba(0, 0, 0, 0.38699229691876746) 84%,
          rgba(0, 0, 0, 0) 100%
        );
        h1 {
          width: 100%;
          font-size: 2.2rem;
          font-weight: bold;
          color: #edf2f4;
        }
        h1:hover {
          text-decoration: underline;
          cursor: pointer;
        }
        .subtitulo {
          bottom: 0;
          width: 100%;
          font-size: 1.1rem;

          color: #edf2f4;
        }
      }
    }
  }
  .relevantes {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    gap: 0px 0px;
    grid-auto-flow: column;
    grid-template-areas:
      "."
      "."
      "."
      ".";
    grid-area: relevantes;
    .title {
      display: flex;
      flex-direction: column;
      align-items: left;
      border-bottom: 1px solid #dadada;

      img {
        display: flex;

        align-self: center;
        width: 75%;
        height: auto;

        border-radius: 10px;
        //shadow inverse
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.192);
      }
      h1 {
        width: 90%;
        font-size: 1.1rem;
        font-weight: bold;
        color: #222222;
        padding: 10px;
      }
      h1:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .title_noImg {
      h1 {
        font-size: 0.9rem;
      }
    }
  }

  ${tablet} {
    width: 100%;
  }
  ${mobile} {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    margin-top: 30px;
    .principal {
      //no grid
      .img {
        position: relative;
        img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          //shadow inverse
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          cursor: pointer;
        }
        .title {
          position: absolute;
          bottom: 0;
          display: flex;
          flex-direction: column;
          padding: 30px;
          border-radius: 10px;
          width: 100%;

          h1 {
            width: 100%;
            font-size: 1.1rem;
          }
          .subtitulo {
            font-size: 0.8rem;
          }
        }
      }
    }
    .otras {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;
