const Router = require('express').Router();

module.exports = (passport) => {
  const MovieData = require('./MovieData');
  const Auth = require('./user')(passport);
  const Update = require('./update')();
  const getUserData = require('./getUserData')();
  console.log(Update);
  Router.use('/moviedata', MovieData);
  Router.use('/auth', Auth);
  Router.use('/update',Update);
  Router.use('/get',getUserData);
  return Router;
}