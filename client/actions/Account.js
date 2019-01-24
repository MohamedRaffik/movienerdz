/*
  Action File for anything involving accounts
*/

export const SIGNED_UP = 'SIGN_UP';
export const LOGGED_IN = 'LOG_IN';
export const LOGGED_OUT = 'LOG_OUT';

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