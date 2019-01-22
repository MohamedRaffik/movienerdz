const axios = require('axios');
const dotenv = require('dotenv').config();
const API_KEY = process.env.API_KEY;
const Router = require('express').Router();

Router.get('/trending', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/trending/movies/week?api_key=${API_KEY}`)
    .then(response => {
      res.send(response.data.results);
    })
    .catch(error => res.status(500).send('Request Failed'));
});

Router.get('/genres', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(response => {
      res.send(response.data.genres);
    })
    .catch(error => res.status(500).send('Request Failed'));
})

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
    .catch(error => res.status(500).send('Request Failed'));
});

module.exports = Router;