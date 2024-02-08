import { useState, useEffect } from 'react';
import posterImage from '../images/nowhere.jpg';
import RatingIcon from './RatingIcon';
import heartIcon from '../images/heart-yellow.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieCard = ({}) => {

    return (
        <article className='movie-card'>
            <div className="img-shadow"></div>
            <img src={ posterImage } alt="nowhere poster">
            </img>
            <img className="heartIcon" src={ heartIcon } alt="fav"></img>
            <RatingIcon rating={30} />
            <p className="movie-title">Nowhere</p>
            <p className="movie-date">Nov 24 2023</p>
        </article>
    );

};

export default MovieCard;
