import React, { Component } from "react";
import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import "./style.css";
// import { baseUrl } from "./config";
const baseUrl = "http://localhost:3000/"
function Carousel() {

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={"https://picsum.photos/200/300"} />
        </div>
        <div>
          <img src={"https://picsum.photos/200/300"} />
        </div>
        <div>
          <img src={"https://picsum.photos/200/300"} />
        </div>
        <div>
          <img src={"https://picsum.photos/200/300"} />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
