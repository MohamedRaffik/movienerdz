import React, { Component } from 'react';
import { NavigationBarApp, FeedApp } from './components';
import { queryResults } from './components/constants';

class App extends Component {
  render() {  	
    return (
      <div>
        <NavigationBarApp />
        <FeedApp />
      </div>
    );
  }
}

export default App;