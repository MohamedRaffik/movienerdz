import { connect } from 'react-redux';
import FeedItem from './FeedItem';

const MapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.loggedIn,
    watch_later: state.watch_later,
    favorites: state.favorites
  }
}

const FeedItemApp = connect(MapStateToProps)(FeedItem);

export default FeedItemApp;