import React from "react";
import styled from "styled-components";

const SelectLogin = ({ children, ...props }) => {
  return <Select {...props}>{children}</Select>;
};

export default SelectLogin;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const Select = styled.select`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ef233c;
  color: #edf2f4;
  border: none;
  border-radius: 10px;
  padding: 10px 10px;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  font-size: 1rem;
  height: auto;
  border: 1px solid transparent;

  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #ffffff;
    color: #ef233c;
    transform: translateX(1px) translateY(1px);
    cursor: pointer;
    border: 1px solid #ef233c;
  }
  &:focus {
    background-color: #ffffff;
    color: #ef233c;

    transform: translateX(1px) translateY(1px);
  }

  ${mobile} {
  }
`;
