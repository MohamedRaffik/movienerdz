/*
  Routes for App to retrieve data from TMDB database
*/

const axios = require('axios');
const dotenv = require('dotenv').config();    // Used to load variables from a .env file -> loads into process.env
const API_KEY = process.env.API_KEY;
const Router = require('express').Router();


//Gets and sends Trending Movies [An array of 20 Json Objects]
Router.get('/trending', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/trending/movies/week?api_key=${API_KEY}`)
    .then(response => res.send(response.data.results))
    .catch(error => res.status(500).send(error.response.data.status_message));
});

//Gets and sends list of all genres and genre ids
Router.get('/genres', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(response => res.send(response.data.genres))
    .catch(error => res.status(500).send(error.response.data.status_message));
});

//Gets a json with an array of genres that are used to find movies based on the combination of genres [Max of three genres]
Router.post('/genres/:page', (req, res) => {
  const genre_string = req.body.genres.toString().replace(',', '%2C').replace(',', '%2C');
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${req.params.page}&with_genres=${genre_string}`)
    .then(response => {
      res.json({
        data: response.data.results,
        total_pages: response.data.total_pages,
        page: response.data.page
      });
    })
    .catch(error => res.status(500).send(error.response.data.status_message));
})

//Gets and sends a set of movie json objects based on a keyword entered by the user
Router.get('/search/:keyword/:page', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${req.params.keyword}&page=${req.params.page}&include_adult=false`)
    .then(response => {
      res.json({
        data: response.data.results,
        total_pages: response.data.total_pages,
        page: response.data.page
      });
    })
    .catch(error => res.status(500).send(error.response.data.status_message));
});

// Route to retrieve upcoming, top_rated, popular, now_playing, latest feeds, can also retrieve different pages of information
Router.get('/:feed/:page', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/${req.params.feed}?api_key=${API_KEY}&language=en-US&page=${req.params.page}&region=US`)
    .then(response => {
      res.json({
        data: response.data.results,
        total_pages: response.data.total_pages,
        page: response.data.page
      });
    })
    .catch(error => res.status(500).send(error.response.data.status_message));
});

module.exports = Router;