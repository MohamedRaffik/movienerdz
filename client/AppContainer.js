import React, { Component } from 'react';
import { NavigationBarApp, FeedApp } from './components';

class AppContainer extends Component {

  componentDidMount() {

  }

  render() {  	
    return (
      <div>
        <NavigationBarApp />
        <FeedApp />
      </div>
    );
  }
}

export default AppContainer;