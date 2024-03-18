import { useEffect,useState,useContext } from 'react';
import { appTitle } from '../globals/globals';
import { useParams, Link } from 'react-router-dom';
import RatingIcon from '../components/RatingIcon';
import yellowHeartIcon from '../images/heart-yellow.svg';
import whiteHeartIcon from '../images/heart-white.svg';
import { fetchMovieDataById,formatRuntime,getDirector,getTrailerKey } from '../utilities/utilities';
import { addFav, deleteFav } from '../features/favs/favsSlice';
import { appStorageName } from '../globals/globals';
import { useDispatch } from 'react-redux';
import YouTube from 'react-youtube';
import React from 'react';
// import playBtn from '../images/playBtn.svg';


const PageDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [isFav, setIsFav] = useState(false);
    const dispatch = useDispatch();
    

    useEffect(() => {
        const fetchMovieData = async () => {
            const fetchedMovie = await fetchMovieDataById(id);
            setMovie(fetchedMovie);
        };
        fetchMovieData();
    }, [id]);

	useEffect(() => {
        if(!movie){
            document.title = `${appTitle} - Movie Detail`;
        }else{
            document.title = `${appTitle} - Movie Detail: ${movie.title}`;
        }

	}, [movie]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem(appStorageName)) || [];
        setIsFav(favorites.includes(movie.id));
    }, [movie.id]);

    const imgBaseUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
    if (movie.poster_path){
       var imgUrl = imgBaseUrl + movie.poster_path; 
    }else{
       var imgUrl = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
    }
    
    
    const backdropBaseUrl = 'https://image.tmdb.org/t/p/w1000_and_h450_multi_faces/';
    var backdropUrl = backdropBaseUrl + movie.backdrop_path;

    const toggleFav = () => {
        if (!isFav) {
            dispatch(addFav(movie.id)); 
        } else {
            dispatch(deleteFav(movie.id)); 
        }
        setIsFav(prevIsFav => !prevIsFav); 
    };

    return (
        <main style={{ backgroundImage: `radial-gradient(circle, rgba(40,40,43,0.40800070028011204) 0%, rgba(40,40,43,0.7553396358543417) 46%, rgba(40,40,43,1) 100%), url(${backdropUrl})`, backgroundSize: 'cover' }}>
            <div className='page-wrapper'>
                <div className="movie-poster">
                    <img src={ imgUrl } alt="nowhere poster"></img>
                </div>
                <div className='detail-wrapper'>
                    <h2>{movie.original_title}</h2>
                    <div className='detail-row-one'>
                        <p>{movie.release_date}</p>
                        <p>
                        {movie.genres && movie.genres.map(genre => {
                            return genre.name + ' | ';
                        })}
                        </p>
                        <p>{movie.runtime && formatRuntime(movie.runtime) }</p>
                    </div>
                    <div className='detail-row-two'>
                        <RatingIcon rating={Math.round(movie.vote_average * 10)} /> 
                        <button style={{ backgroundColor: 'transparent',border: 'none'}}className="heartIcon" onClick={toggleFav}>
                            {isFav ? <img src={whiteHeartIcon} alt="fav" /> : <img src={yellowHeartIcon} alt="fav" />}
                        </button>
                        {/* trailerbtn, but seems unnessasary */}
                        {/* <button 
                            className="play-trailer"
                            onClick={() => {
                                const trailerSection = document.getElementById('trailer');
                                if (trailerSection) {
                                trailerSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                            }}
                            >
                            <img src={playBtn} alt="play-trailer-btn" /> 
                        </button>*/}
                    </div> 
                    <div className='overview'>
                        <p><strong>Director: </strong> {movie.credits && getDirector(movie.credits.crew)}</p>
                        <p><strong>Overview</strong></p>
                        <p>{movie.overview}</p>
                    </div>
                    <div className='trailer' id='trailer'>
                        <YouTube
                            videoId={movie.videos && getTrailerKey(movie.videos.results)}
                            opts={{ width: '90%' }}
                        />
                    </div>

                </div>
            </div>
        </main>
    );
    
};

export default PageDetail;