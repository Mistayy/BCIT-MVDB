import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerCard from "./BannerCard";
import { useState, useEffect } from 'react';
import { movieDBoptions } from "../globals/globals";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  var fetchUrl = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  const [bannerMovies, setBannerMovies] = useState([]);
  useEffect(() => {
    fetch(fetchUrl, movieDBoptions)
      .then(response => response.json())
      .then(data => setBannerMovies(data.results.slice(0, 5))) 
      .catch(error => console.error('Error fetching movie data:', error));
  }, []);

  return (
    <div className="banner-wrapper">
      <div className="slider-container">
        <Slider {...settings}>
          {bannerMovies.map((movie, index) => (
                <BannerCard
                  key={index}
                  title={movie.title}
                  releaseDate={movie.release_date}
                  backDropImagePath={movie.backdrop_path}
                />
              ))}
        </Slider>
      </div>
    </div>
  );
}

export default Banner;