import styled from "styled-components";
const InputLogin = (props) => {
  return <Input {...props} />;
};

export default InputLogin;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const Input = styled.input.attrs((props) => ({
  ...props,
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.backgroundColor || "#e6e6e6"};
  border: none;
  border-radius: 10px;
  padding: 10px 10px;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  height: 2.5rem;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease-in-out;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid transparent;
  &::placeholder {
    color: #414141;
  }

  &:hover {
    background-color: #ffffff;
    border: 1px solid ${(props) => props.color || "#e6e6e6"};

    color: ${(props) => props.color || "#e6e6e6"};

    &::placeholder {
      color: ${(props) => props.color || "#e6e6e6"};
    }
  }
  &:focus {
    background-color: ${(props) => props.color || "#ef233c"};
    color: #ffffff;
    transform: translateX(1px) translateY(1px);
    &::placeholder {
      color: #ffffff;
    }
  }
  &:required {
    border: 1px solid red;
    background-color: #6e6700;
  }
  &:-webkit-validation-bubble-message {
    z-index: 9999;
    background-color: #0088ff;
  }

  ${mobile} {
    //input more hight

    font-size: 1.3rem;
  }
`;
