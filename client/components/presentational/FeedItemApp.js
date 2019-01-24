import { connect } from 'react-redux';
import { addFavorite, addWatchLater, removeFavorite, removeWatchLater } from '../../actions'; 
import FeedItem from './FeedItem';

const MapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.loggedIn
  }
}

const MapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddFavorite: (data) => dispatch(addFavorite(data)),
    onRemoveFavorite: (data) => dispatch(removeFavorite(data)),
    onAddWatchLater: (data) => dispatch(addWatchLater(data)),
    onRemoveWatchLater: (data) => dispatch(removeWatchLater(data))
  }
}

const FeedItemApp = connect(MapStateToProps, MapDispatchToProps)(FeedItem);

export default FeedItemApp;