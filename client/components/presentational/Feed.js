import React from 'react';
import FeedItem from './FeedItem';
import { FILTER_ACTIONS } from '../../actions';
const { TRENDING, UPCOMING, POPULAR, TOP_RATED, LATEST, SEARCH, WATCH_LATER, FAVORITES } = FILTER_ACTIONS;


const Feed = (props) => {
	const feedStyling = {
		"display": "inline-block",
		"margin": "20px"
	}

	let results = [];
	switch(props.filter) {
		case TRENDING:
			results = props.trending;
		case UPCOMING:
			results = props.upcoming;
		case POPULAR:
			results = props.popular;
		case TOP_RATED:
			results = props.top_rated;
		case LATEST:
			results = props.latest;
		case SEARCH:
			results = props.search;
		default:
			results = [];
	}

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