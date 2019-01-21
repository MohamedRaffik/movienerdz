const path = require('path');
const express = require('express');
const app = express();
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
app.use(express.static(path.join(__dirname, `client/${PATH_DIR}`)));


//api call to trending week returns an array of objects which contain movie information
app.get('/api/trendingWeek',(req,res) =>{

	const completeURL = `${baseURL}/trending/movie/week${API_KEY}`;
	console.log(`[GET REQ TRENDING_WEEK]: ${completeURL}`);

	axios.get(completeURL).then(apiData =>{
		//console.log(apiData.data.results);
		console.log(`[GET RES TRENDING_WEEK]: ${completeURL}`);
		res.send(apiData.data.results);
	}).catch(err => {
		res.send({"apiAlive": false})
	});
	
});
//api call to upcoming movies which returns an array of objects which contain movie information
app.get('/api/upcoming',(req,res) =>{
	const completeURL = `${baseURL}/movie/upcoming${API_KEY}`;
	console.log(`[GET REQ UPCOMING]: ${completeURL}`);
	
	axios.get(completeURL).then(apiData =>{
		//console.log(apiData.data.results);
		console.log(`[GET RES UPCOMING]: ${completeURL}`);
		res.send(apiData.data.results);
	}).catch(err => {
		res.send({"apiAlive": false})
	});

});
//api call to movie popular which returns an array of objects which contain movie information
app.get('/api/popular',(req,res) =>{

	const completeURL = `${baseURL}/movie/popular${API_KEY}`;
	console.log(`[GET REQ POPULAR]: ${completeURL}`);
	
	axios.get(completeURL).then(apiData =>{
		//console.log(apiData.data.results);
		console.log(`[GET RES POPULAR]: ${completeURL}`);
		res.send(apiData.data.results);
	}).catch(err => {
		res.send({"apiAlive": false})
	});

});
//api call to top rated movies which returns an array of objects which contain movie information
app.get('/api/topRated',(req,res) =>{
	const completeURL = `${baseURL}/movie/top_rated${API_KEY}`;
	console.log(`[GET REQ TOP_RATED]: ${completeURL}`);
	axios.get(completeURL).then(apiData =>{
		//console.log(apiData.data.results);
		console.log(`[GET RES TOP_RATED]: ${completeURL}`);
		res.send(apiData.data.results);
	}).catch(err => {
		res.send({"apiAlive": false})
	});

});
//api call to fetch the latest movie, only returns a singular object with movie information
app.get('/api/latest',(req,res) =>{
	const completeURL = `${baseURL}/movie/latest${API_KEY}`;
	console.log(`[GET REQ LATEST]: ${completeURL}`);
	
	axios.get(completeURL).then(apiData =>{
		//console.log(apiData.data.results);
		console.log(`[GET RES LATEST]: ${completeURL}`);
		res.send(apiData.data);
	}).catch(err => {
		res.send({"apiAlive": false})
	});

});

app.get('/api/search/(:queryString)?',(req,res) =>{
	let userQuery = "&query=" + req.params.queryString;
	// console.log(typeof req.params.queryString);
	// console.log(req.params.queryString);
	// let rawString = req.params.queryString;
	// // console.log( decodeURI(rawString));
	// console.log(rawString.replace(' ',"space"));

	// console.log(rawString);
	// what if user enters %20, might return error
	//
	if(typeof req.params.queryString === 'undefined'){
		userQuery =  "&query="+"latest";
	}
	//userQuery.replace('%20','');


	const completeURL = `${baseURL}/search/movie${API_KEY}${userQuery}`;
	console.log(`[GET REQ SEARCH]: ${completeURL}`);
	
	//'%2B' == '+'
	//'+' == ' ' // white space
	axios.get(completeURL).then(apiData =>{
		//console.log(apiData.data.results);
		console.log(`[GET RES SEARCH]: ${completeURL}`);
		res.send(apiData.data.results);
	}).catch(err => {
		res.send({"apiAlive": false})
	});

});

app.get('*', (req, res) => {
  res.send({"queryFormattingError": true});
});
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, `client/${PATH_DIR}/index.html`))
// });

app.listen(3000, () => {
  console.log('Listening on Port 3000');
  
})