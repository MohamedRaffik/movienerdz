import { connect } from 'react-redux';
import FeedItem from './FeedItem';

const MapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.loggedIn,
  }
}

const FeedItemApp = connect(MapStateToProps)(FeedItem);

export default FeedItemApp;