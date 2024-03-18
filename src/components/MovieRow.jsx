import React from "react";
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard";
import { movieDBoptions } from '../globals/globals';


function MovieRow({category}) {
  var sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

    ]
  };



  var fetchUrl = 'https://api.themoviedb.org/3/movie/' + category + '?language=en-US&page=1';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(fetchUrl, movieDBoptions)
      .then(response => response.json())
      .then(data => setMovies(data.results)) 
      .catch(error => console.error('Error fetching movie data:', error));
  }, []);

  //response will be list of movie items.
  // {
  //   "adult": false,
  //   "backdrop_path": "/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg",
  //   "genre_ids": [
  //     878,
  //     28,
  //     18
  //   ],
  //   "id": 933131,
  //   "original_language": "ko",
  //   "original_title": "황야",
  //   "overview": "After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.",
  //   "popularity": 2214.237,
  //   "poster_path": "/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg",
  //   "release_date": "2024-01-26",
  //   "title": "Badland Hunters",
  //   "video": false,
  //   "vote_average": 6.7,
  //   "vote_count": 423
  // }




  return (
    <div className="slider-container">
      <Slider {...sliderSettings}>
        {movies.map((movie, index) => (
            <MovieCard
              key={index}
              rating={Math.round(movie.vote_average * 10)}
              title={movie.title}
              releaseDate={movie.release_date}
              posterImagePath={movie.poster_path}
              intro={movie.overview}
              movieId = {movie.id}
            />
          ))}
      </Slider>
    </div>
  );
}

export default MovieRow;