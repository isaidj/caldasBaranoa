import React, { useEffect, useState } from "react";
import styled from "styled-components";
//icon magnifying glass
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import useGlobalVariables from "../global/useGlobalVariables";
import { useDebounce } from "../hooks/useDebounce";

const Buscar = () => {
  const urlWorking = useGlobalVariables().urlWorking;

  const [searchTerm, setSearchTerm] = useState("");
  const [resultado, setResultado] = React.useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      handleChange(debouncedSearchTerm);
    } else {
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);
  const handleChange = (e) => {
    axios
      .get(urlWorking + "searchPubli", {
        params: {
          nom_publi: e,
        },
      })
      .then((res) => {
        setResultado(res.data);
        // console.log(res.data);
      });
  };

  const openNewNoticia = (idNoticia) => {
    //open noticia with react router
    window.location.href = `/noticia/${idNoticia}`;
    // window.open(`/noticia/${idNoticia}`);
  };
  return (
    <Div buscando={isSearching}>
      <FaSearch className="iconSearch" />
      <Input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => setSearchTerm(e.target.value)}
        // onFocus={() => setBuscando(true)}
        // onBlur={() => setBuscando(false)}
      />
      <div className="resultado__container">
        {resultado.map((item, index) => (
          <div
            onClick={() => {
              // setBuscando(true);
              openNewNoticia(item.idpublicaciones);
            }}
            className="resultado"
            key={index}
          >
            <h3>{item.nom_publi}</h3>
            <p>{item.fecha}</p>
          </div>
        ))}
      </div>
    </Div>
  );
};

export default Buscar;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const Div = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: 20px;
  .resultado__container {
    position: absolute;
    height: auto;
    top: 100%;
    z-index: 30;
    ${(props) => (props.buscando ? "display: flex;" : "display: none;")}
    flex-direction: column;
    background-color: #ffffff;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    padding: 10px;
    width: 400px;
  }
  .resultado {
    cursor: pointer;
    padding: 5px;
    h3 {
      font-size: 1rem;
      font-weight: bold;
    }
    p {
      font-size: 0.8rem;
      font-weight: bold;
    }
    &:hover {
      background-color: #ef233c;
      color: #ffffff;
      border-radius: 10px;
      /* padding: 5px; */
    }
  }
`;
const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
  placeholder: props.placeholder,
}))`
  width: auto;
  height: 2rem;
  padding: 0.5rem;

  margin: 8px 0;

  margin-left: 4px;
  box-sizing: border-box;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: #f8f8f8;
  color: #242424;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: bold;

  outline: 0;
  transition: border-color 0.3s;
  &::placeholder {
    color: #242424;
  }
  &:focus {
    border-color: #ef233c;
  }
  &:hover {
    border-color: #ef233c;
  }
  ${mobile} {
    display: none;
  }
`;
