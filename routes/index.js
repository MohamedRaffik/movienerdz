const Router = require('express').Router();
const MovieData = require('./MovieData');
const Update = require('./update');

module.exports = (passport) => {
  const Auth = require('./user')(passport);
  Router.use('/moviedata', MovieData);
  Router.use('/auth', Auth);
  Router.use('/update',Update);
  return Router;
}