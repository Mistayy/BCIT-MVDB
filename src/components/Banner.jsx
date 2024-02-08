import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="src/images/hungergame.jpg" alt="banner1" />
        </div>
        <div>
          <img src="src/images/theboyandtheheron.jpg" alt="banner2" />
        </div>
        <div>
          <img src="src/images/wonka.jpg" alt="banner3" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;