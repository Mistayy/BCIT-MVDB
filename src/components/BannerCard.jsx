import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { Link } from "react-router-dom";


const BannerCard = ({title,releaseDate,backDropImagePath,intro,movieId}) => {

    const imgBaseUrl = 'https://image.tmdb.org/t/p/w1000_and_h450_multi_faces/';
    const linkToUrl = '/movie-details/' + movieId;
    var imgUrl = imgBaseUrl + backDropImagePath;

    return (
        <article className='banner-card'>
            <div className='img-gradient'></div>
            <div className="img-wrapper" >
                <img src={imgUrl} alt="movie back drop" />
            </div>
            <div className="info-wrap">
                    <p className="title">{title}</p>
                    <p className="intro">{intro.split(' ').slice(0, 50).join(' ')}...</p>
                    <p className="release-date">Release Date: {releaseDate}</p>
                    <Link to={linkToUrl} className="more-info-btn">More Info</Link>
            </div>
            

        </article>
    );

};

export default BannerCard;
