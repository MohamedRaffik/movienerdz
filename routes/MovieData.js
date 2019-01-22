const axios = require('axios');
const dotenv = require('dotenv').config();
const API_KEY = process.env.API_KEY;
const Router = require('express').Router();


Router.get('/trending', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/trending/movies/week?api_key=${API_KEY}`)
    .then(response => {
      res.send(response.data.results);
    })
    .catch(error => res.status(500).send(error));
});

Router.get('/genres', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(response => {
      res.send(response.data.genres);
    })
    .catch(error => res.status(500).send(error));
});

Router.post('/genres', (req, res) => {
  const genre_string = req.body.genres.toString().replace(',', '%2C').replace(',', '%2C');
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre_string}`)
    .then(response => {
      res.json({
        data: response.data.results,
        total_pages: response.data.total_pages,
        page: response.data.page
      });
    })
    .catch(error => console.error(error));
})

Router.get('/search/:keyword', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${req.params.keyword}&page=1&include_adult=false`)
    .then(response => {
      res.json({
        data: response.data.results,
        total_pages: response.data.total_pages,
        page: response.data.page
      });
    })
    .catch(error => res.status(500).send(error));
});

// route for: upcoming, top_rated, popular, now_playing, latest
Router.get('/:feed/:page', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/${req.params.feed}?api_key=${API_KEY}&language=en-US&page=${req.params.page}`)
    .then(response => {
      res.json({
        data: response.data.results,
        total_pages: response.data.total_pages,
        page: response.data.page
      });
    })
    .catch(error => res.status(500).send(error));
});

module.exports = Router;