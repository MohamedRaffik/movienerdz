/*
  Connect Navigation Bar to Redux Store
*/  

import { connect } from 'react-redux';
import { changeFilter, updateFeed, updateKeyword } from '../../actions';
import NavigationBar from './NavigationBar';

const MapStateToProps = (state, ownProps) => {
  return {
    filter: state.filter,
  };
};

const MapDispatchtoProps = (dispatch, ownProps) => {
  return {
    onChangeFilter: (filter) => dispatch(changeFilter(filter)),
    onUpdateFeed: (type, data) => dispatch(updateFeed(type, data)),
    onUpdateKeyword: (keyword) => dispatch(updateKeyword(keyword))
  };
};

const NavigationBarApp = connect(MapStateToProps, MapDispatchtoProps)(NavigationBar);

export default NavigationBarApp;