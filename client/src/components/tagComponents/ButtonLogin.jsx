import styled from "styled-components";
const ButtonLogin = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonLogin;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ef233c;
  color: #edf2f4;
  border: none;
  border-radius: 10px;
  padding: 10px 10px;
  font-weight: bold;

  font-size: 1rem;
  outline: none;
  height: 2.5rem;
  width: 100%;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    border: 1px solid #ef233c;
    color: #ef233c;
  }

  ${mobile} {
    font-size: 1.3rem;
  }
`;
