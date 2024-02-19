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

const MovieCard = ({rating,title,releaseDate,posterImagePath,intro,movieId}) => {

    const imgBaseUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
    var imgUrl = imgBaseUrl + posterImagePath;
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
    
    return (
        <article className='movie-card'>
            <div className="img-shadow"></div>
            <div className="img-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={imgUrl} alt="nowhere poster" />
                {hovered && (
                    <div className="hover-layer">
                        <p className="movie-intro">{intro.split(' ').slice(0, 25).join(' ')}...</p>
                        <Link to="#" className="more-info-btn">More Info</Link>
                    </div>
                )}
            </div>
            <button className="heartIcon" onClick={toggleFav}>
                {isFav ? <img src={whiteHeartIcon} alt="fav" /> : <img src={yellowHeartIcon} alt="fav" />}
            </button>
            <div className="rating-icon-wrapper">
                <RatingIcon rating={rating} />
            </div>
            <div className='movie-short-info'>
                <p className="movie-title">{title}</p>
                <p className="movie-date">{releaseDate}</p>
            </div>

        </article>
    );

};

export default MovieCard;
