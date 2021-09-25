import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.css";

import styled from "styled-components";
SwiperCore.use([Autoplay, Pagination, Navigation]);
const urlImg = (name) => {
  return `https://caldasbaranoa.s3.amazonaws.com/${name}`;
};
export default function SwiperFreeMode(data) {
  const openNewNoticia = (idNoticia) => {
    //open noticia with react router
    window.location.href = `/noticia/${idNoticia}`;
    // window.open(`/noticia/${idNoticia}`);
  };
  return (
    <>
      <SwiperContainer>
        <Swiper
          //slidesPerView depends on the width of the screen
          slidesPerView={
            window.innerWidth > 800
              ? "3"
              : window.innerWidth > 600
              ? "2"
              : window.innerWidth > 400
              ? "1"
              : "1"
          }
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {data.data.slice(15, 20).map((item, index) => {
            return (
              <SwiperSlide
                className="swiper-slide"
                onClick={() => openNewNoticia(item.idpublicaciones)}
                key={index}
              >
                <img src={urlImg(item.img_portada)} alt="slide" />
                <h1 className="titulo">{item.nom_publi}</h1>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperContainer>
    </>
  );
}
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
const SwiperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 500px;
  background-color: #ef233c;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75) inset;

  .mySwiper {
    width: 90%;

    height: 90%;
    border-radius: 8px;
  }
  .titulo {
    position: absolute;
    border-radius: 8px;
    width: 100%;
    bottom: 0%;
    color: white;
    font-size: 1.5rem;
    margin: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8379726890756303) 0%,
      rgba(0, 0, 0, 0.38699229691876746) 84%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .swiper-slide {
    cursor: pointer;
    width: 100%;
    height: 100%;

    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  }
  ${mobile} {
  }
`;
