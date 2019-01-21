import { connect } from 'react-redux';
import MovieSwipe from './MovieSwipe';

const mapStateToProps = (state, ownProps) => {
  return {
    now_playing: state.now_playing
  }
}

const MovieSwipeApp = connect(mapStateToProps)(MovieSwipe);

export default MovieSwipeApp;