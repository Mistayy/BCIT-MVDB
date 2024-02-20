// Utilities
import { movieDBoptions } from "../globals/globals";
function getYear(){
    const d = new Date();
    return d.getFullYear();
}

async function fetchMovieDataById (movieId) {
    try {
        const fetchUrl = `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos,credits&language=en-US`;
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

function formatRuntime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
}
function getTrailerKey(videos){
    var trailer = videos.find(item => item.type === "Trailer");
    return trailer.key;
}
function getDirector(crew){
    var director = crew.find(item => item.job === "Director");
    return director.name;
}

export { getYear,fetchMovieDataById, formatRuntime,getTrailerKey,getDirector}