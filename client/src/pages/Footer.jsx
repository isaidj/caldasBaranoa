import React from "react";

import styled from "styled-components";
const Footer = () => {
  //footer withour bootstrap
  return (
    <FooterStyled>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Caldas Baranoa</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, suscipit.
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
const FooterStyled = styled.footer`
  background-color: #2b2d42;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  h5 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0;
  }
  p {
    color: #fff;
    font-size: 1rem;
    margin-bottom: 0;
  }

  li {
    display: flex;
    height: 100%;
  }
  li a {
    color: #dadada;
    font-size: 1rem;
    font-weight: bold;
    height: 100%;
    line-height: 0;
    padding: 1.5rem 1rem;
  }
  ${mobile} {
  }
  ${tablet} {
  }
`;
