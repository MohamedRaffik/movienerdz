import { SIGNED_UP, LOGGED_IN, LOGGED_OUT } from '../actions';
import { UPDATE_FEED, CHANGE_FILTER, FILTER_ACTIONS, UPDATE_KEYWORD, UPDATE_GENRE } from '../actions';
const { TRENDING, UPCOMING, POPULAR, TOP_RATED, PLAYING_NOW, SEARCH, WATCH_LATER, FAVORITES } = FILTER_ACTIONS;

const initialState = {
  loggedIn: false,
  name: '',
  watch_later: [],       
  favorites: [],
  trending: [],                   //Json Data in form of {data: Array, page: int, total_pages: int}
  upcoming: {},
  popular: {},
  top_rated: {},
  playing_now: {},      
  search: {},
  keyword: '',
  genres: [],
  filter: TRENDING 
};

export default (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
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
      newState.loggedIn = false;
      newState.name = '';
      return newState;
    case UPDATE_FEED:
      if (action.feed_type === TRENDING) newState.trending = action.data
      else if (action.feed_type === UPCOMING) newState.upcoming = action.data
      else if (action.feed_type === POPULAR) newState.popular = action.data
      else if (action.feed_type === TOP_RATED) newState.top_rated = action.data
      else if (action.feed_type === PLAYING_NOW) newState.playing_now = action.data;
      else if (action.feed_type === SEARCH) newState.search = action.data;
      else if (action.feed_type === WATCH_LATER) newState.watch_later = action.data;
      else if (action.feed_type === FAVORITES) newState.favorites = action.data;
      return newState;
    case CHANGE_FILTER:
      newState.filter = action.filter;
      return newState
    case UPDATE_KEYWORD:
      newState.keyword = action.keyword;
      return newState;
    case UPDATE_GENRE:
      newState.genres = action.genres;
      return newState;
    default:
      return state;
  };
};