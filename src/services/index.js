import axios from 'axios';
import apiPaths from '../lib/api';
import { API_KEY } from '../constant';


const movies = {

    getUpcomingMoviesList: function (callback) {
        let fetchMoviesUrl = apiPaths.getUpcomingMoviesList + API_KEY;
            fetchMoviesUrl = fetchMoviesUrl + `&page=${1}`;
            axios.get(fetchMoviesUrl)
                .then(function (response) {
                    callback({ data: response.data.results });
                   
            })
    },

    getPopularMoviesList: function (callback) {
        let fetchMoviesUrl = apiPaths.getPopularMoviesList + API_KEY;
            fetchMoviesUrl = fetchMoviesUrl + `&page=${1}`;
            axios.get(fetchMoviesUrl)
            .then(function (response) {
                callback({ data: response.data.results });
            })
    },

    getMovieDetail: function (movieId, callback) {
        const fetchMovieDetailUrl = apiPaths.getMovieDetail + movieId + API_KEY;
        axios.get(fetchMovieDetailUrl)
        .then(function (response) {
            callback(response.data);
        })
            
    },
};

export default movies;

    