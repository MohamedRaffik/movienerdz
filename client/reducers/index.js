
import { SIGNED_UP, LOGGED_IN, LOGGED_OUT } from '../actions';
import { ADD_FAVORITE, REMOVE_FAVORITE, ADD_WATCH_LATER, REMOVE_WATCH_LATER } from '../actions';
import { UPDATE_FEED, CHANGE_FILTER, FILTER_ACTIONS } from '../actions';

const { TRENDING, UPCOMING, POPULAR, TOP_RATED, PLAYING_NOW, SEARCH, WATCH_LATER, FAVORITES } = FILTER_ACTIONS;

const initialState = {
  loggedIn: false,   
  name: '',          
  watch_later: [],   
  favorites: [],    
  trending: [],      
  upcoming: {},      
  popular: {},       
  top_rated: {},     
  playing_now: {},  
  search: {},        
  filter: TRENDING   
};

export default (state = initialState, action) => {
  let newState = {...state};
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
    case UPDATE_FEED:
      if (action.feed_type === TRENDING) newState.trending = action.data
      else if (action.feed_type === UPCOMING) newState.upcoming = action.data
      else if (action.feed_type === POPULAR) newState.popular = action.data
      else if (action.feed_type === TOP_RATED) newState.top_rated = action.data
      else if (action.feed_type === PLAYING_NOW) newState.playing_now = action.data;
      else if (action.feed_type === SEARCH) newState.search = action.data;
      return newState;
    case CHANGE_FILTER:
      newState.filter = action.filter;
      return newState
    default:
      return state;
  };
};