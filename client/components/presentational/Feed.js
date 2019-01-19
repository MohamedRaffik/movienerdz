import React from 'react';
import FeedItem from './FeedItem';

const Feed = (props) => {
	const feedStyling = {
		"display": "inline-block",
		"margin": "20px"
	}

	const items = props.results.map((row) =>
		<FeedItem data={row}/>
	);

	return (
		<div className="feed" style={feedStyling}>
			<h2>results:</h2>
			{items}	
		</div>
	);
}

export default Feed;