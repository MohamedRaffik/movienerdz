/*
	Presentational Component that shows a grid of FeedItems
	Displays information based upon the filter given to show the appropiate feed
*/

import React from 'react';
import FeedItem from './FeedItem';
import { Grid, Segment } from 'semantic-ui-react';
import { FILTER_ACTIONS } from '../../actions';
const { TRENDING, UPCOMING, POPULAR, TOP_RATED, SEARCH, WATCH_LATER, FAVORITES } = FILTER_ACTIONS;


const Feed = (props) => {
	let results = [];
	const filter = props.filter;
	if (filter === TRENDING) results = props.trending;
	else if (filter === UPCOMING) results = props.upcoming.data;
	else if (filter === POPULAR) results = props.popular.data;
	else if (filter === TOP_RATED) results = props.top_rated.data;
	else if (filter === SEARCH) results = props.search.data;
	
	const items = results.map((element, index) => 
		<FeedItem key={index} data={element} />
	);

	return (
		<Segment inverted={true} style={{ "margin": "0" }}>
			<Grid relaxed={true} padded={true}>
				<Grid.Row style={{ "marginLeft": "2em" }}>
					<h2>Results:</h2>
				</Grid.Row>
				<Grid.Row centered={true}>
					{items}
				</Grid.Row>
			</Grid>
		</Segment>
	);
}

export default Feed;