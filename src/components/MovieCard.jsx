import { useState, useEffect } from 'react';
import posterImage from '../images/nowhere.jpg';
import RatingIcon from './RatingIcon';
import heartIcon from '../images/heart-yellow.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieCard = ({rating,title,releaseDate,posterImagePath}) => {

    const imgBaseUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
    var imgUrl = imgBaseUrl + posterImagePath;
    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    return (
        <article className='movie-card'>
            <div className="img-shadow"></div>
            <img src= {imgUrl}  alt="nowhere poster">
            </img>
            <img className="heartIcon" src={ heartIcon } alt="fav"></img>
            <div className="rating-icon-wrapper"><RatingIcon rating={rating} /></div>
            <p className="movie-title">{title}</p>
            <p className="movie-date">{releaseDate}</p>
        </article>
    );

};

export default MovieCard;
