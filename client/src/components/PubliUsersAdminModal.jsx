import React from "react";

import styled from "styled-components";


export const PubliUsersAdminModal = ({AllPubli}) => {
  
console.log(AllPubli)    

  const [isOpen, setIsOpen] = React.useState(true);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <DivContainer isOpen={isOpen} onClick={()=>handleOpenMenu}>
      
    
      </DivContainer>
    
    </>
  );
};


const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e6e6e657;
  padding-bottom: 10px;
  .img-container {
    width: 50px;
    width: ${(props) => (props.isOpen ? "100px" : "50px")};
    height: ${(props) => (props.isOpen ? "100px" : "50px")};
    border: 2px solid #ffffff;
    border-radius: 50%;
    transition: all 0.1s ease-in-out;
    img {
      //img dentro del container
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
      border-radius: 50%;
    }
  }

  .info-container {
    position: relative;
    width: 50%;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    bottom: 0;

    .icon {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.8rem;
      /* font-weight: bold; */
      white-space: nowrap;
      margin: 0;
      margin-top: 5px;
      padding: 0;
      overflow: hidden;
      color: #ffffff;
    }
    .username {
      font-size: 0.9rem;
      font-weight: bold;
    }
    .settings {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
