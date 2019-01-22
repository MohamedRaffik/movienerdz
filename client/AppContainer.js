import React, { Component } from 'react';
import { NavigationBarApp, FeedApp, MovieSwipeApp } from './components';
import axios from 'axios';
import { FILTER_ACTIONS } from './actions';
const { TRENDING, UPCOMING, POPULAR, TOP_RATED, PLAYING_NOW } = FILTER_ACTIONS;

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onUpdateFeed } = this.props;
    const feeds = [
      [PLAYING_NOW, 'now_playing'],
      [TRENDING, 'trending'],
      [UPCOMING, 'upcoming'],
      [TOP_RATED, 'top_rated'],
      [POPULAR, 'popular'],
    ];

    for (let i in feeds) {
      let url = `/api/moviedata/${feeds[i][1]}${feeds[i][1] !== 'trending' ? '/1' : ''}`
      const action = feeds[i][0];
      axios.get(url)
        .then(res => onUpdateFeed(action, res.data))
        .catch(err => console.error(err));
    }
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