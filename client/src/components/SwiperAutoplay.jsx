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
export default function SwiperAutoplay(data) {
  return (
    <>
      <SwiperContainer>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {data.data.map((item, index) => {
            return (
              <SwiperSlide className="swiper-slide" key={index}>
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
const SwiperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 600px;
  background-color: #8d99ae;

  .mySwiper {
    width: 600px;

    height: 500px;
    border-radius: 8px;
  }
  .titulo {
    position: absolute;
    bottom: 0%;
    color: white;
    font-size: 1.5rem;
  }
  .swiper-slide {
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
  }
`;
