import { useEffect, useState } from 'react';
import { appTitle } from '../globals/globals';
import MovieCard from '../components/MovieCard';
import { useSelector } from 'react-redux';
import { movieDBoptions } from '../globals/globals';

const PageFavourite = () => {
    const favs = useSelector((state) => state.favs.items);
    const [movieLists, setMovieLists] = useState([]);


    useEffect(() => {
        document.title = `${appTitle} - Favourite`;
        if(favs.length >1){
            const fetchMovieData = async (movieId) => {
                try {
                    const fetchUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
                    const response = await fetch(fetchUrl, movieDBoptions);
                    if (!response.ok) {
                        throw new Error('Failed to fetch movie data');
                    }
                    const movieData = await response.json();
                    return movieData;
                } catch (error) {
                    console.error('Error fetching movie data:', error);
                    return null;
                }
            };

            const fetchAllMovieData = async () => {
                const fetchedMovies = await Promise.all(favs.map(movieId => fetchMovieData(movieId)));
                setMovieLists(fetchedMovies.filter(movie => movie !== null));
            };

            fetchAllMovieData();
        }
    }, [favs, movieDBoptions]);

    return (
        <main>
            <section>
                <h2>Favourites({favs.length})</h2>
                {favs.length < 1 ? (
                    <p>You have no favourite movie. Return to the Movies page to add some favourite movies.</p>
                ) : (
                    <div className="movie-grid">
                        {movieLists.map((movie, index) => (
                            <MovieCard
                                key={index}
                                rating={Math.round(movie.vote_average * 10)}
                                title={movie.title}
                                releaseDate={movie.release_date}
                                posterImagePath={movie.poster_path}
                                intro={movie.overview}
                                movieId={movie.id}
                            />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default PageFavourite;
