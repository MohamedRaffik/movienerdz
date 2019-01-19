import React, { Component } from 'react';
import { NavigationBar, Feed } from './components';
import { queryResults } from './components/constants';
import './App.css';

class App extends Component {
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