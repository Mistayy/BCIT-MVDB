// Utilities
import { movieDBoptions } from "../globals/globals";
function getYear(){
    const d = new Date();
    return d.getFullYear();
}

const fetchMovieDataById = async (movieId) => {
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

export { getYear,fetchMovieDataById }