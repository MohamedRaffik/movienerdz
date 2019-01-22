import React from 'react';
import FeedItem from './FeedItem';
import { FILTER_ACTIONS } from '../../actions';
import { queryResults } from '../constants';
const { TRENDING, UPCOMING, POPULAR, TOP_RATED, PLAYING_NOW, SEARCH, WATCH_LATER, FAVORITES } = FILTER_ACTIONS;


const Feed = (props) => {
	const feedStyling = {
		"display": "inline-block",
		"margin": "20px"
	}

	let results = [];
	const filter = props.filter;
	if (filter === TRENDING) results = props.trending;
	else if (filter === UPCOMING) results = props.upcoming;
	else if (filter === POPULAR) results = props.popular;
	else if (filter === TOP_RATED) results = props.top_rated;
	else if (filter === PLAYING_NOW) results = props.playing_now;
	
	const items = results.map((row, index) =>
		<FeedItem key={index} data={row}/>
	);

	return (
		<div className="feed" style={feedStyling}>
			<h2>results:</h2>
			{items}	
		</div>
	);
}

export default Feed;