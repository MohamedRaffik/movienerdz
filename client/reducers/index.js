import {LOGIN, SIGNUP, LOGOUT, ADDFAVORITE, REMOVEFAVORITE, ADDWATCHLATER, REMOVEWATCHLATER, SEARCH} from "../actions";

// initialize default state

///trending/{media_type}/{time_window}

const initialState = {
  feed: [],
  isGuest: false,
  userName: "johnDoe23"
  search: {
    text: "search text",
    genres: []
  },
  filter: ""
};

// create reducer function


export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state;
    case SIGNUP:
      return state;
    case LOGOUT:
    	return state;
    case ADDFAVORITE:
      return state;
    case REMOVEFAVORITE:
      return state;
    case ADDWATCHLATER:
      return state;
    case REMOVEWATCHLATER:
      return state;
    case SEARCH:
      return state;

    default:
      return state;
  }

};
