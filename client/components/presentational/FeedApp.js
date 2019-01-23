/*
  Connects Feed component to the Redux Store
*/

import { connect } from 'react-redux';
import Feed from './Feed';
import { updateFeed } from '../../actions';

const MapStateToProps = (state, ownProps) => {
  return {
    filter: state.filter,
    keyword: state.keyword,
    trending: state.trending,
    upcoming: state.upcoming,
    popular: state.popular,
    top_rated: state.top_rated,
    search: state.search,
    favorites: state.favorites,
    watch_later: state.watch_later,
  };
}

const MapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateFeed: (type, data) => dispatch(updateFeed(type, data))
  }
}

const FeedApp = connect(MapStateToProps, MapDispatchToProps)(Feed);

export default FeedApp;