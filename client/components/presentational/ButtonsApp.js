/*
  Connects Buttons component to the Redux Store
*/

import { connect } from 'react-redux';
import Buttons from './Buttons';
import { updateFeed } from '../../actions';

const MapStateToProps = (state, ownProps) => {
  return {
    watch_later: state.watch_later,
    favorites: state.favorites,
    username: state.name
  }
}

const MapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateFeed: (type, data) => dispatch(updateFeed(type, data))
  }
}

const ButtonsApp = connect(MapStateToProps, MapDispatchToProps)(Buttons);

export default ButtonsApp;