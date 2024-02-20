import { useEffect, useState } from 'react';
import { appTitle } from '../globals/globals';
import MovieCard from '../components/MovieCard';
import { movieDBoptions } from '../globals/globals';
import { useParams } from 'react-router-dom';
import React from 'react';

const PageFavourite = ({}) => {
    const { query } = useParams();
    useEffect(() => {
        document.title = `${appTitle} - Search Result`;
    }, []);
    const [results, setResults] = useState([]);
    const fetchUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1'`;
    useEffect(() => {
      fetch(fetchUrl, movieDBoptions)
        .then(response => response.json())
        .then(data => setResults(data.results)) 
        .catch(error => console.error('Error fetching movie data:', error));
    }, []);
    

    return (
        <main>
            <section>
                <h2>Search Result ({results.length})</h2>
                {results.length < 1 ? (
                    <p>No search result, please try with some other movie title.</p>
                ) : (
                    <div className="movie-grid">
                        {results.map((movie, index) => (
                            <MovieCard
                            key={index}
                            rating={Math.round(movie.vote_average * 10)}
                            title={movie.title}
                            releaseDate={movie.release_date}
                            posterImagePath={movie.poster_path}
                            intro={movie.overview}
                            movieId = {movie.id}
                            />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default PageFavourite;
