import { useState, useEffect } from 'react';
import RatingIcon from './RatingIcon';
import yellowHeartIcon from '../images/heart-yellow.svg';
import whiteHeartIcon from '../images/heart-white.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/favs/favsSlice';
import { appStorageName } from '../globals/globals';
import React from 'react';
import {formatDate} from '../utilities/utilities';
const MovieCard = ({rating,title,releaseDate,posterImagePath,intro,movieId}) => {

    const imgBaseUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
    if (posterImagePath != null){
        var imgUrl = imgBaseUrl + posterImagePath;
    }else{
        //default img
        var imgUrl = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
    }
    
    const [hovered, setHovered] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem(appStorageName)) || [];
        setIsFav(favorites.includes(movieId));
    }, [movieId]);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const toggleFav = () => {
        if (!isFav) {
            dispatch(addFav(movieId)); 
        } else {
            dispatch(deleteFav(movieId)); 
        }
        setIsFav(prevIsFav => !prevIsFav); 
    };
    
    const linkToUrl = '/movie-details/' + movieId;
    return (
        <article className='movie-card'>
            <div className="img-shadow"></div>
            <div className="img-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={imgUrl} alt="poster of the movie" />
                {hovered && (
                    <div className="hover-layer">
                        <p className="movie-intro">{intro.split(' ').slice(0, 25).join(' ')}...</p>
                        <Link to={linkToUrl} className="more-info-btn">More Info</Link>
                    </div>
                )}
            </div>
            <button className="heartIcon" onClick={toggleFav}>
                {isFav ? <img src={whiteHeartIcon} alt="fav" /> : <img src={yellowHeartIcon} alt="fav" />}
            </button>
            <div className='explain-text'>
                    <p>Add to Favorite</p>
            </div>
            <div className="rating-icon-wrapper">
                <RatingIcon rating={rating} />
            </div>
            <div className='movie-short-info'>
                <Link to={linkToUrl}> <p className="movie-title">{title}</p> </Link>
                <p className="movie-date">{formatDate(releaseDate)}</p>
            </div>

        </article>
    );

};

export default MovieCard;
