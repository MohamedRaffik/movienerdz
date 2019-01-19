import React, { Component } from 'react';
import NavigationBar from './components/containers/NavigationBar';
import './App.css';
import Feed from './components/presentational/Feed';

class App extends Component {
  render() {
  	var queryResults = [
  	{
  		"title": "Spiderman: Into the Spiderverse",
  		"description": "a movie about various spider people from different realities coming into one.",
  		"date": "January 9, 2019",

  	},
  	{
  		"title": "Avengers: Infinity War",
  		"description": "a movie about various spider people from different realities coming into one.",
  		"date": "January 10, 2019",
  		
  	},
  	{
  		"title": "Bumblebee",
  		"description": "a movie about various spider people from different realities coming into one.",
  		"date": "January 11, 2019",
  		
  	}];
  	console.log(queryResults);
    return (
      <div>
        <NavigationBar />
        <Feed results = {queryResults}/>
        
      </div>
    );
  }
}

export default App;