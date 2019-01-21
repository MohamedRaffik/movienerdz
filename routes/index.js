const Router = require('express').Router();
const MovieData = require('./MovieData');

Router.use('/moviedata', MovieData);

module.exports = Router;