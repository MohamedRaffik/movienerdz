const path = require('path');
const express = require('express');
const app = express();
const api = require('./routes');
const PATH_DIR = process.env.NODE_ENV === 'production' ? 'build' : 'public';
const axios = require('axios')


//auth
// SIGNED_UP
// LOGin 
// LOGGED_OUT

//querying db
// ADD_FAVORITE
// REMOVE_FAVORITE
// ADD_WATCH_LATER
// REMOVE_WATCH_LATER
// WATCH_LATER
// FAVORITES

//hitting our endpoint
// trendingWeek &
// UPCOMING & 
// POPULAR &
// TOP_RATED &
// LATEST &
// SEARCH &
const baseURL = "https://api.themoviedb.org/3";
const API_KEY = "?api_key=b6bbbb876524fb068f4abcc95fa67e9f";


app.use(express.json());
app.use('/api', api);
app.use(express.static(path.join(__dirname, `client/${PATH_DIR}`)));

 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, `client/${PATH_DIR}/index.html`))
});

app.listen(3000, () => {
  console.log('Listening on Port 3000');
})