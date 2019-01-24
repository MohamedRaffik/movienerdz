const Router = require('express').Router();

module.exports = (passport) => {
  const MovieData = require('./MovieData');
  const Auth = require('./user')(passport);
  Router.use('/moviedata', MovieData);
  Router.use('/auth', Auth);
  return Router;
}