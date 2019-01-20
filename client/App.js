import React, { Component } from 'react';
import { NavigationBarApp, Feed } from './components';
import { queryResults } from './components/constants';

class App extends Component {
  render() {  	
    return (
      <div>
        <NavigationBarApp />
        <Feed results = {queryResults}/>
      </div>
    );
  }
}

export default App;