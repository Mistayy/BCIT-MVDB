import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import posterImage from '../images/nowhere.jpg';
import { useParams, Link } from 'react-router-dom';
import RatingIcon from '../components/RatingIcon';
import heartIcon from '../images/heart-yellow.svg';

const PageDetail = () => {
    const { id } = useParams();
    const movieObj={
        adult: false,
        backdrop_path: "/gFWeOJRI3vuV7bksf4m0IhvPHfx.jpg",
        genre_ids: [
            80,
            18,
            53,
            28
        ],
        duration:"1h47m",
        director:"meow",
        id: 75780,
        original_language: "en",
        original_title: "Jack Reacher",
        overview: "One morning in an ordinary town, five people are shot dead in a seemingly random attack. All evidence points to a single suspect: an ex-military sniper who is quickly brought into custody. The interrogation yields one written note: 'Get Jack Reacher!'. Reacher, an enigmatic ex-Army investigator, believes the authorities have the right man but agrees to help the sniper's defense attorney. However, the more Reacher delves into the case, the less clear-cut it appears. So begins an extraordinary chase for the truth, pitting Jack Reacher against an unexpected enemy, with a skill for violence and a secret to keep.",
        popularity: 65.527,
        poster_path: "/uQBbjrLVsUibWxNDGA4Czzo8lwz.jpg",
        release_date: "2012-12-20",
        title: "Jack Reacher",
        video: false,
        vote_average: 6.6,
        vote_count: 6652
    }
	useEffect(() => {

        if(!movieObj){
            document.title = `${appTitle} - Movie Detail`;
        }else{
            document.title = `${appTitle} - Movie Detail: ${movieObj.original_title}`;
        }

	}, [movieObj]);

    return (
        <main>
            <div className='page-wrapper'>
                <div className="movie-poster">
                    <img src={ posterImage } alt="nowhere poster"></img>
                </div>
                <div className='detail-wrapper'>
                    <h2>{movieObj.original_title}</h2>
                    <div className='detail-row-one'>
                        <p>{movieObj.release_date}</p>
                        <p>{movieObj.genre_ids}</p>
                        <p>{movieObj.duration}</p>
                    </div>
                    <div className='detail-row-two'>
                        <RatingIcon rating={(movieObj.vote_average)*10} /> 
                        <img className="heartIcon" src={ heartIcon } alt="fav"></img>
                    </div>
                    <div>
                        <p><strong>Director</strong> {movieObj.director}</p>
                        <p>Overview</p>
                        <p>{movieObj.overview}</p>
                    </div>

                </div>
            </div>
        </main>
    );
    
};

export default PageDetail;