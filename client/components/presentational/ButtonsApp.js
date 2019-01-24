/*
  Connects Buttons component to the Redux Store
*/

import { connect } from 'react-redux';
import Buttons from './Buttons';
import { addFavorite, removeFavorite, addWatchLater, removeWatchLater } from '../../actions';

const MapStateToProps = (state, ownProps) => {
    return {
        watch_later: state.watch_later,
        favorites: state.favorites
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

const ButtonsApp = connect(MapStateToProps, MapDispatchToProps)(Buttons);

export default ButtonsApp;