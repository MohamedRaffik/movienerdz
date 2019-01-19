// Namespace Actions aka Action Types

export const ADDFAVORITE = "ADDFAVORITE";
export const REMOVEFAVORITE = "REMOVEFAVORITE";
export const ADDWATCHLATER = "ADDWATCHLATER";
export const REMOVEWATCHLATER = "REMOVEWATCHLATER";
export const AUTHENTICATE = "AUTHENTICATE";
export const SIGNUP = "SIGNUP";
export const SEARCH = "SEARCH";
export const LOGOUT = "LOGOUT";



export const addFavorite = (value = 1) => {
	return{
		type: ADDFAVORITE,
		
	}
}

export const removeFavorite = (value = 1) => {
	return{
		type: REMOVEFAVORITE,
		
	}
}

export const addWatchLater = () => {
	return {
		type: ADDWATCHLATER
	}
}

export const removeWatchLater = () => {
	return {
		type: REMOVEWATCHLATER
	}
}

export const authenticate = () => {
	return {
		type: AUTHENTICATE
	}
}

export const signup = () => {
	return {
		type: SIGNUP
	}
}

export const search = () => {
	return {
		type: SEARCH
	}
}

export const logout = () => {
	return {
		type: LOGOUT
	}
}




