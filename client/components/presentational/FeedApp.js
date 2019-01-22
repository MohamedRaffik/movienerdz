import { connect } from 'react-redux';
import Feed from './Feed';

const maptStateToProps = (state, ownProps) => {
  return {
    filter: state.filter,
    trending: state.trending,
    upcoming: state.upcoming,
    popular: state.popular,
    top_rated: state.top_rated,
    search: state.search,
    favorites: state.favorites,
    watch_later: state.watch_later,
    loggedIn: state.loggedIn
  };
}

const FeedApp = connect(maptStateToProps)(Feed);

export default FeedApp;