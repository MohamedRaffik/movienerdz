import { connect } from 'react-redux';
import MovieSwipe from './MovieSwipe';

const mapStateToProps = (state, ownProps) => {
  return {
    playing_now: state.playing_now
  }
}

const MovieSwipeApp = connect(mapStateToProps)(MovieSwipe);

export default MovieSwipeApp;