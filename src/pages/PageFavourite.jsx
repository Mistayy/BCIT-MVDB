import { useEffect, useState } from 'react';
import { appTitle } from '../globals/globals';
import MovieCard from '../components/MovieCard';
import { useSelector,useDispatch } from 'react-redux';
import React from 'react';
import { fetchMovieDataById } from '../utilities/utilities';

const PageFavourite = () => {
    const favs = useSelector((state) => state.favs.items);
    const [movieList, setMovieList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = `${appTitle} - Favourite`;
    }, []);

    useEffect(() => {
        const fetchMovies = async () => {
            if (favs.length > 0) {
                let newLists = []; // Create a new array to hold the updated movie list
                for (const id of favs) {
                    try {
                        const movieData = await fetchMovieDataById(id);
                        newLists.push(movieData); // Push movieData to the new array
                    } catch (error) {
                        console.error(`Error fetching movie with ID ${id}:`, error);
                    }
                }
                setMovieList(newLists); // Set the state to the new array containing all movie data
            }
        };
    
        fetchMovies();
    }, [favs]);

    return (
        <main>
            <section>
                <h2>Favourites ({favs.length})</h2>
                {favs.length < 1 ? (
                    <p>You have no favourite movie. Return to the Movies page to add some favourite movies.</p>
                ) : (
                    <div className="movie-grid">
                        {movieList.length > 0 ? movieList.map((movie, index) => (
                            <MovieCard
                                key={index}
                                rating={Math.round(movie.vote_average * 10)}
                                title={movie.title}
                                releaseDate={movie.release_date}
                                posterImagePath={movie.poster_path}
                                intro={movie.overview}
                                movieId={movie.id}
                            />
                        )): "trouble loading movieLists"}
                    </div>
                )}
            </section>
        </main>
    );
};

export default PageFavourite;
