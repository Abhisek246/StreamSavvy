import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "9f436c063f21a8e05536631dcd0a41e7";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

//https://api.themoviedb.org/3/trending/all/day?api_key=9f436c063f21a8e05536631dcd0a41e7

const getTrending = axios.get(movieBaseUrl+"/trending/all/day?api_key="+apiKey);
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {getTrending, getMovieByGenreId}