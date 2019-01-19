import React, { Component } from 'react';
import NavigationBar from './components/containers/NavigationBar';
import MovieSwipe from './components/presentational/MovieSwipe';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <MovieSwipe />
      </div>
    );
  }
}

export default App;