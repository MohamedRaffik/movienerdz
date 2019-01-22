import { FILTER_ACTIONS } from '../actions';
const { TRENDING, UPCOMING, POPULAR, TOP_RATED, PLAYING_NOW, SEARCH, WATCH_LATER, FAVORITES } = FILTER_ACTIONS;

export const FILTER_OPTIONS = [
  [ 'Show Trending Movies', TRENDING ],
  [ 'Show Upcoming Movies', UPCOMING ],
  [ 'Show Popular Movies', POPULAR ],
  [ 'Show Top Rated Movies', TOP_RATED ]
];

export const GENRE_OPTIONS = [
  "Action"
];

