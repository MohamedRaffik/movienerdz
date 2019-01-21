import React, { Component } from 'react';
import { NavigationBarApp, FeedApp, MovieSwipeApp } from './components';
import axios from 'axios';
import { FILTER_ACTIONS } from './actions';
const { TRENDING, UPCOMING, POPULAR, TOP_RATED, LATEST, PLAYING_NOW } = FILTER_ACTIONS;

class AppContainer extends Component {

  

  componentDidMount() {
    
  }

  render() {  	
    return (
      <div>
        <NavigationBarApp />
        <MovieSwipeApp />
        <FeedApp />
      </div>
    );
  }
}

export default AppContainer;