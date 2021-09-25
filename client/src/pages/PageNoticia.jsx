//PAGE OF NOTICIA
import React, { useEffect, useState } from "react";
import Axios from "axios";
import useGlobalVariables from "../global/useGlobalVariables";
import HeaderSecondary from "./HeaderSecondary";
import styled from "styled-components";

import { PageNoticeStyled } from "./PagesStyled";
import { Capitalize, HtmlToText } from "../components/Funciones";
import { NavLink } from "react-router-dom";
import SecondSection from "./SecondSection";
const urlImg = (name) => {
  return `https://caldasbaranoa.s3.amazonaws.com/${name}`;
};
const PageNoticia = (idNoticia) => {
  const [data, setData] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [publiOfCategorias, setPubliOfCategorias] = useState([]);
  const urlWorking = useGlobalVariables().urlWorking;
  // console.log(idNoticia);

  const id = idNoticia.match.params.id;

  // console.log(id);
  useEffect(() => {
    Axios.get(urlWorking + "getPubliId", {
      params: {
        id: id,
      },
    }).then((response) => {
      setData(response.data);
    });

    Axios.get(urlWorking + "getAllCategOfPubli", {
      params: {
        idpublicaciones: id,
      },
    }).then((response) => {
      setCategorias(response.data);
      console.log(response.data);
    });
  }, [id, urlWorking]);

  useEffect(() => {
    if (categorias.length > 0) {
      Axios.get(urlWorking + "getAllPubliOfCateg", {
        params: {
          idpublicaciones: id,
          arrayIdCategorias: categorias.map(
            (categoria) => categoria.id_categorias
          ),
        },
      }).then((response) => {
        //new array to delete the the item equal to the id of the publication
        const newArray = response.data.filter(
          (publi) => publi.idpublicaciones !== Number(id)
        );
        setPubliOfCategorias(newArray);
        // console.log(newArray);
      });
      //delete duplicated idpublicaciones from array
    }
  }, [categorias, urlWorking]);
  // console.log(data);

  return (
    <div>
      <HeaderSecondary />
      {/* <h1>noticia numero {idNoticia}</h1> */}
      <PageNoticeStyled>
        <div>
          <Div1>
            <h4>Temas</h4>

            {categorias.map((item) => (
              <li className="" key={item.id}>
                {item.nom_categoria}
              </li>
            ))}
          </Div1>
        </div>
        <div>
          {data.map((item, index) => (
            <Div2 key={index}>
              <h1>{Capitalize(item.nom_publi)}</h1>
              <img src={urlImg(item.img_portada)} alt="img" />
              <div
                className="subtitulo"
                dangerouslySetInnerHTML={{ __html: HtmlToText(item.sub_publi) }}
              />

              <div
                clasName="InnerHtml"
                dangerouslySetInnerHTML={{ __html: HtmlToText(item.des_publi) }}
              />
            </Div2>
          ))}
        </div>
        <div>
          <Div3>
            <h4>Relacionado</h4>
            {publiOfCategorias.slice(0, 4).map((item, index) => (
              <div key={index}>
                <NavLink to={`/noticia/${item.idpublicaciones}`}>
                  <img src={urlImg(item.img_portada)} alt="img" />
                  <span className="categoria">{item.categ_principal}</span>
                  <h1>{Capitalize(item.nom_publi)}</h1>

                  {/* <p
                    dangerouslySetInnerHTML={{
                      __html: HtmlToText(item.sub_publi),
                    }}
                  /> */}
                </NavLink>
              </div>
            ))}
          </Div3>
        </div>
      </PageNoticeStyled>
      {publiOfCategorias.length > 0 ? (
        <SecondSection publi={publiOfCategorias} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PageNoticia;

const Div1 = styled.div`
  border: 1px solid #e6e6e6;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  margin-top: 8rem;
  margin-right: 3rem;
`;
const Div2 = styled.div`
  img {
    width: 100%;
  }
  .subtitulo {
    font-size: 1.5rem;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  .InnerHtml {
    width: 100%;
    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
    }
  }
`;

const Div3 = styled.div`
  max-width: 100%;
  margin-left: 15px;
  h4 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1f1f1f;
    text-align: left;
    margin-bottom: 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    img {
      width: 100%;
      height: auto;
      max-height: 150px;
      border-radius: 15px;
      object-fit: cover;
      object-position: center;
    }
    h1 {
      font-size: 1.1rem;
      font-weight: bold;
      color: #1f1f1f;
      text-align: left;
      margin-bottom: 1rem;
    }
    .categoria {
      align-self: flex-start;
      width: auto;

      font-size: 0.8em;
      color: #ef233c;
      font-weight: bold;

      border-radius: 5px;
      padding: 0px 2px;
    }
    p {
      font-size: 0.9rem;
      font-weight: bold;
      color: #1f1f1f;
      text-align: left;
      margin-bottom: 1rem;
    }
  }
`;
// const Div3 = styled.div``;
