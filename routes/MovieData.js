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

Router.get('/upcoming/:page', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${req.params.page}`)
  .then(response => {
    res.send(response.data.results);
  })
  .catch(error => res.status(500).send('Request Failed'));
});

Router.get('/popular/:page', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${req.params.page}`)
  .then(response => {
    res.send(response.data.results);
  })
  .catch(error => res.status(500).send('Request Failed'));
});

Router.get('/top_rated/:page', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${req.params.page}`)
  .then(response => {
    res.send(response.data.results);
  })
  .catch(error => res.status(500).send('Request Failed'));
});

Router.get('/latest/:page', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US&page=${req.params.page}`)
  .then(response => {
    res.send(response.data.results);
  })
  .catch(error => res.status(500).send('Request Failed'));
});

Router.get('/playing_now/:page', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${req.params.page}`)
  .then(response => {
    res.send(response.data.results);
  })
  .catch(error => res.status(500).send('Request Failed'));
});

Router.get('/genres', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/list?api_key=${API_KEY}&language=en-US`)
  .then(response => {
    res.send(response.data.results);
  })
  .catch(error => res.status(500).send('Request Failed'));
})

module.exports = Router;