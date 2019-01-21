import React, { Component } from 'react';
import { NavigationBarApp, FeedApp, MovieSwipeApp } from './components';

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