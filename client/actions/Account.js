export const SIGNED_UP = 'SIGN_UP';
export const LOGGED_IN = 'LOG_IN';
export const LOGGED_OUT = 'LOG_OUT';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const ADD_WATCH_LATER = 'ADD_WATCH_LATER';
export const REMOVE_WATCH_LATER = 'REMOVE_WATCH_LATER';

export const addFavorite = (data) => {
  return {
    type: ADD_FAVORITE,
    data
  }
}

export const removeFavorite = (data) => {
  return {
    type: REMOVE_FAVORITE,
    data
  }
}

export const addWatchLater = (data) => {
	return {
    type: ADD_WATCH_LATER,
    data
	}
}

export const removeWatchLater = (data) => {
	return {
    type: REMOVE_WATCH_LATER,
    data
  }
}

export const loggedIn = (username, watch_later, favorites) => {
	return {
    type: LOGGED_IN,
    username,
    watch_later,
    favorites
	}
}

export const signedUp = (username) => {
	return {
		type: SIGNED_UP,
		username,
	}
}

export const loggedOut = () => {
	return {
		type: LOGGED_OUT,
	}
}