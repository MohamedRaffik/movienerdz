/*
  Connects MovieSwipe component to the Redux Store
*/

import { connect } from 'react-redux';
import MovieSwipe from './MovieSwipe';

const MapStateToProps = (state, ownProps) => {
  return {
    playing_now: state.playing_now,
    favorites: state.favorites,
    watch_later: state.watch_later,
    loggedIn: state.loggedIn
  }
}

const MovieSwipeApp = connect(MapStateToProps)(MovieSwipe);

export default MovieSwipeApp;