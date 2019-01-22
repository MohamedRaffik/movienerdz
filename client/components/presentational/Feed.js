import React from 'react';
import FeedItem from './FeedItem';
import { Grid, Segment } from 'semantic-ui-react';
import { FILTER_ACTIONS } from '../../actions';
const { TRENDING, UPCOMING, POPULAR, TOP_RATED, PLAYING_NOW, SEARCH, WATCH_LATER, FAVORITES } = FILTER_ACTIONS;


const Feed = (props) => {
	let results = [];
	const filter = props.filter;
	if (filter === TRENDING) results = props.trending;
	else if (filter === UPCOMING) results = props.upcoming;
	else if (filter === POPULAR) results = props.popular;
	else if (filter === TOP_RATED) results = props.top_rated;
	else if (filter === PLAYING_NOW) results = props.playing_now;

	const items = [];
	for (let i = 0; i < results.length; i+=4) {
		items.push(
			<Grid.Row key={i} centered={true}>
				<FeedItem data={results[i]} />
				<FeedItem data={results[i+1]} />
				<FeedItem data={results[i+2]} />
				<FeedItem data={results[i+3]} />
			</Grid.Row>
		);
	} 

	return (
		<Segment inverted={true} style={{"margin": "0"}}>
			<Grid relaxed={true} padded={true}>
				<Grid.Row style={{"margin-left": "2em"}}>
					<h2>Results:</h2>
				</Grid.Row>
				{items}
			</Grid>
		</Segment>
		
	);
}

export default Feed;