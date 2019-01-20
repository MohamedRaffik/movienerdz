import { SIGNED_UP, LOGGED_IN, LOGGED_OUT } from '../actions';
import { ADD_FAVORITE, REMOVE_FAVORITE, ADD_WATCH_LATER, REMOVE_WATCH_LATER } from '../actions';

const initialState = {
  loggedIn: false,
  name: '',
  watch_later: [],
  favorites: []
}

export default (state = initialState, action) => {
  let newState = {...state}
  switch(action.type) {
    case SIGNED_UP:
      newState.loggedIn = true;
      newState.name = action.username;
      return newState;
    case LOGGED_IN:
      newState.loggedIn = true;
      newState.name = action.username;
      newState.watch_later = action.watch_later;
      newState.favorites = action.favorites; 
      return newState;
    case LOGGED_OUT:
      return initialState;
    case ADD_FAVORITE:
      newState.favorites = [...newState.favorites, action.data]
      return newState;
    case REMOVE_FAVORITE:     ///UPDATE
      return newState;
    case ADD_WATCH_LATER:
      newState.watch_later = [...newState.watch_later, action.data]
      return newState;
    case REMOVE_WATCH_LATER:  ///UPDATE
      return newState;
    default:
      return state;
  }
}