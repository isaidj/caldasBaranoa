// -------------Imports for the components-----------------------------------------------------
import styled from "styled-components";
import { HtmlToText, MaxWords } from "../../components/Funciones";
//-------------functions for the components-----------------------------------------------
const urlImg = (name) => {
  return `https://caldasbaranoa.s3.amazonaws.com/${name}`;
};
const openNewNoticia = (idNoticia) => {
  //open noticia with react router
  window.location.href = `/noticia/${idNoticia}`;
  // window.open(`/noticia/${idNoticia}`);
};
//------------ Variables for the components-----------------------------------------------------
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;

//----------------Componentes---------------------------------------------------------------

export const RielLittle = (props) => {
  console.log(props);
  return (
    <RielLittleStyle>
      {
        <div className="riel-cards">
          {props.publi.map((publi, index) => (
            <div className="card-article" key={index}>
              <div className="img">
                <img
                  onClick={() => openNewNoticia(publi.idpublicaciones)}
                  src={urlImg(publi.img_portada)}
                  alt="publi"
                />
                <div className="title">
                  <a href={`/noticia/${publi.idpublicaciones}`}>
                    <h1>{publi.nom_publi}</h1>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </RielLittleStyle>
  );
};
const RielLittleStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  .riel-cards {
    /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
    display: grid;
    gap: 20px;
    grid-auto-rows: auto;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));

    .card-article {
      width: 100%;
      height: auto;
      img {
        width: 100%;
        height: 124px;
        object-fit: cover;
        object-position: center;
        border-radius: 5px;
        margin-bottom: 10px;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
      .title {
        width: 100%;
        padding: 10px;
        a {
          h1 {
            font-size: 1rem;
            color: #212529;
            font-weight: bold;
          }
        }
      }
    }
  }
  ${tablet} {
    width: 100%;
  }
  ${mobile} {
    .card-article {
    }
  }
`;

export const RielTipoRow = (props) => {
  return (
    <RielTipoRowStyle>
      <section className="otras">
        {props.publi.map((publi, index) => (
          <article className="title" key={index}>
            <img
              onClick={() => openNewNoticia(publi.idpublicaciones)}
              src={urlImg(publi.img_portada)}
              alt="publi"
            />
            <a href={`/noticia/${publi.idpublicaciones}`}>
              <h1>{publi.nom_publi}</h1>
            </a>
          </article>
        ))}
      </section>
    </RielTipoRowStyle>
  );
};
const RielTipoRowStyle = styled.div`
  width: 80%;
  margin: 0 auto;

  .otras {
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-top: 1px solid #dadada;
      border-bottom: 1px solid #dadada;
      padding-top: 10px;
      padding-bottom: 10px;

      img {
        width: 100px;
        min-height: 100px;
        height: 100%;

        border-radius: 10px;
        object-fit: cover;

        //shadow inverse
        /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); */
      }
      h1 {
        width: 90%;
        font-size: 0.8rem;
        /* font-weight: bold; */
        color: #222222;
        padding: 10px;
      }
      h1:hover {
        text-decoration: underline;
        cursor: pointer;
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

export const RielBig = (props) => {
  console.log(props);
  return (
    <RielBigStyle>
      <section className="container__section">
        <div className="principal__cards">
          {props.publi.map((publi, index) => (
            <div className="card-section" key={index}>
              <div className="img">
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
                      __html: MaxWords(HtmlToText(publi.sub_publi), 600),
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </RielBigStyle>
  );
};
const RielBigStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;

  .container__section {
    display: flex;
    flex-direction: column;

    width: 100%;
    .principal__cards {
      display: grid;
      gap: 20px;
      grid-auto-rows: auto;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
      .card-section {
        img {
          width: 100%;
          height: 300px;

          object-fit: cover;
          object-position: center;
          border-radius: 5px;
          margin-bottom: 10px;
          cursor: pointer;
          &:hover {
            opacity: 0.8;
          }
        }
        .title {
          width: 100%;
          padding: 10px;
          a {
            h1 {
              font-size: 1.2rem;
              color: #212529;
            }
          }
          .subtitulo {
            font-size: 12px;
            color: #8c8c8c;
          }
        }
      }
    }
  }
  ${tablet} {
    width: 100%;
  }
`;
