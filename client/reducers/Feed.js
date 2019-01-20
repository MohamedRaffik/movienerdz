import { UPDATE_FEED, CHANGE_FILTER, FILTER_ACTIONS } from '../actions';

const { TRENDING, UPCOMING, POPULAR, TOP_RATED, LATEST, SEARCH } = FILTER_ACTIONS;

const initialState = {
  trending: [],
  upcoming: [],
  popular: [],
  top_rated: [],
  latest: [],
  search: [],
  filter: TRENDING
}

export default (state = initialState, action) => {
  let newState = {...state};
  switch(action.type) {
    case UPDATE_FEED:
      if (action.feed_type === TRENDING) newState.trending = action.data
      else if (action.feed_type === UPCOMING) newState.upcoming = action.data
      else if (action.feed_type === POPULAR) newState.popular = action.data
      else if (action.feed_type === TOP_RATED) newState.top_rated = action.data
      else if (action.feed_type === LATEST) newState.latest = action.data;
      else if (action.feed_type === SEARCH) newState.search = action.data;
      return newState;
    case CHANGE_FILTER:
      newState.filter = action.filter;
      return newState
    default:
      return state
  }
}