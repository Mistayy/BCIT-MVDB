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

function formatDate(inputDate) {
    // Split the input date string into year, month, and day
    const [year, month, day] = inputDate.split('-');

    // Convert month from numeric to textual representation
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthText = months[parseInt(month, 10) - 1];

    // Format the date as "yyyy mmm dd"
    return `${year} ${monthText} ${day}`;
}

function getTrailerKey(videos){
    var trailer = videos.find(item => item.type === "Trailer");
    if (trailer){
      return trailer.key;  
    }else{
        return null
    }
    
}
function getDirector(crew){
    var director = crew.find(item => item.job === "Director");
    if (director){
        return director.name;
    }else {
        return null
    }
    
}

export { getYear,fetchMovieDataById, formatRuntime,getTrailerKey,getDirector,formatDate}