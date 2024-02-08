import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import RatingIcon from '../components/RatingIcon';
import MovieCard from '../components/MovieCard';
import React, { Component } from "react";
import Slider from "react-slick";
import MovieRow from '../components/MovieRow';
import Banner from '../components/Banner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const PageHome = () => {

    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWYyMzE0ODZlZTU1OWI4ZGRiNzZmYzRiNDE1MDM4ZiIsInN1YiI6IjY1YjdmZThlMWM2MzViMDEzMjZlODA2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3KVg7wksup6_90xSDTK4yNsh_u2PRIvQ_-r_OMjJbM'
        }
      };
      
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response.results[0].original_title))
        .catch(err => console.error(err));
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
        };
    const movieRating = 80;
    return (
        <main>
            <section>
                <h2>Home Page</h2>
                <Banner />
            </section>
            <section>
                <MovieRow/>
            </section>
        </main>
    );
    
};

export default PageHome;