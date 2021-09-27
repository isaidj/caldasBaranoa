import React from "react";
import styled from "styled-components";
const Info = ({ information }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <InfoContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <span className="btn_info">?</span>
      <div className="message">
        <p>{information}</p>
      </div>
    </InfoContainer>
  );
};

export default Info;
const InfoContainer = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
  .btn_info {
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;

    background-color: ${(props) => (props.isOpen ? "#7597f5" : "#fff")};
    color: ${(props) => (props.isOpen ? "#fff" : "#1f1f1f")};
    border: 1px solid #494949;
    display: flex;
  }
  .btn_info:hover {
    background-color: #7597f5;
    color: #fff;
  }
  .message {
    position: absolute;
    top: 20px;
    width: 250px;
    height: auto;
    box-shadow: 0px 0px 10px #00000039;
    border: 1px solid #a5a5a5;
    border-radius: 5px;
    color: #2e2e2e;
    padding: 10px;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    z-index: 1;
  }
`;
