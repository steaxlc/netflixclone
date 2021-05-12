const apiKey = "52ac3ce428878b5215f7466e4182e6cb";

const baseURL = "https://api.themoviedb.org/3";

export const imagePath = "https://image.tmdb.org/t/p/w300"
export const coverImagePath = "https://image.tmdb.org/t/p/original"

export const categoryListURL = {
    netflix: `${baseURL}/discover/tv?with_network=213&api_key=${apiKey}`,
    trending: `${baseURL}/trending/all/week?api_key=${apiKey}`,
    toprated: `${baseURL}/movie/top_rated?api_key=${apiKey}`,
    action: `${baseURL}/discover/movie?with_genres=28&api_key=${apiKey}`,
    comedy: `${baseURL}/discover/movie?with_genres=35&api_key=${apiKey}`,
    horror: `${baseURL}/discover/movie?with_genres=27&api_key=${apiKey}`,
    romance: `${baseURL}/discover/movie?with_genres=10749&api_key=${apiKey}`,
    documentary: `${baseURL}/discover/movie?with_genres=99&api_key=${apiKey}`,
}

export const getMovieInfo = (id) => {
    return `${baseURL}/tv/${id}?api_key=${apiKey}`;
}