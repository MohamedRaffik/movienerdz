/*
  Action file for anything concerning the displays feeds
  The feeds/results are :
    Trending
    Upcoming
    Popular
    Top Rated
    Search
    Watch Later list
    Favorites list
*/

export const UPDATE_FEED = 'UPDATE_FEED';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const UPDATE_KEYWORD = 'UPDATE_KEYWORD';
export const FILTER_ACTIONS = {
  TRENDING: 'TRENDING',
  UPCOMING: 'UPCOMING',
  POPULAR: 'POPULAR',
  TOP_RATED: 'TOP_RATED',
  PLAYING_NOW: 'PLAYING_NOW',
  SEARCH: 'SEARCH',
  WATCH_LATER: 'WATCH_LATER',
  FAVORITES: 'FAVORITES'
};

export const updateFeed = (feed_type, data) => {
  return {
    type: UPDATE_FEED,
    feed_type,
    data
  }
}

export const changeFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    filter
  }
}

export const updateKeyword = (keyword) => {
  return {
    type: UPDATE_KEYWORD,
    keyword
  }
}