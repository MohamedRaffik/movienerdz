import React, { Component } from 'react';
import { NavigationBar, Feed } from './components';
import { queryResults, movieDbURL, trendingWeek, upcoming, topRated, latest, popular } from './components/constants';
import axios from 'axios';


class App extends Component {


  axiosCall = (baseURL, route, key, action) => {
  	const finalURL = baseURL + route + key;
  	axios.get(finalURL).then( response => {
  		console.log(response.data);
  		{this.props.action(response.data)}
  		

  	}).catch(err =>{
  		console.log("axios get error: ", err);
  		return err;
  	})
  	}
  }
  componentDidMount(){
  	//trending and upcoming
  	const key = process.env.API_KEY;
  	axiosCall(movieDbURL,trendingWeek, key);

  	

  }
  render() {  	
    return (
      <div>
        <NavigationBar />
        <Feed results = {queryResults}/>
      </div>
    );
  }
}

export default App;