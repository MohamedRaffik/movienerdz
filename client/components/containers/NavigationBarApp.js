/*
  Connect Navigation Bar to Redux Store
*/  

import { connect } from 'react-redux';
import { changeFilter, updateFeed } from '../../actions';
import NavigationBar from './NavigationBar';

const mapStateToProps = (state, ownProps) => {
  return {
    filter: state.filter,
  };
};

const MapDispatchtoProps = (dispatch, ownProps) => {
  return {
    onChangeFilter: (filter) => dispatch(changeFilter(filter)),
    onUpdateFeed: (type, data) => dispatch(updateFeed(type, data))
  };
};

const NavigationBarApp = connect(mapStateToProps, MapDispatchtoProps)(NavigationBar);

export default NavigationBarApp;