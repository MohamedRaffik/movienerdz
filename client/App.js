/*
  Connects AppContainer to Redux Store
*/

import { connect } from 'react-redux';
import { updateFeed, loggedIn } from './actions';
import AppContainer from './AppContainer';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateFeed: (feed_type, data) => dispatch(updateFeed(feed_type, data)),
    onLoggedIn: (username, watch_later, favorites) => dispatch(loggedIn(username, watch_later, favorites))
  }
}

const App = connect(null, mapDispatchToProps)(AppContainer);

export default App;