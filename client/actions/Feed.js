export const UPDATE_FEED = 'UPDATE_FEED';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const FILTER_ACTIONS = {
  TRENDING: 'TRENDING',
  UPCOMING: 'UPCOMING',
  POPULAR: 'POPULAR',
  TOP_RATED: 'TOP_RATED',
  LATEST: 'LATEST',
  SEARCH: 'SEARCH'
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
