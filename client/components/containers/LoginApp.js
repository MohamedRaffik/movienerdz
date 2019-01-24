/*
  Connects Login Component to Redux Store
*/

import { connect } from 'react-redux';
import { loggedIn, loggedOut, signedUp, changeFilter } from '../../actions';
import Login from './Login';

const MapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.loggedIn,
    username: state.name,
    filter: state.filter
  }
}

const MapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeFilter: (filter) => dispatch(changeFilter(filter)),
    onLoggedIn: (username, watch_later, favorites) => dispatch(loggedIn(username, watch_later, favorites)),
    onLoggedOut: () => dispatch(loggedOut()),
    onSignedUp: (username) => dispatch(signedUp(username))
  }
}

const LoginApp = connect(MapStateToProps, MapDispatchToProps)(Login)

export default LoginApp;