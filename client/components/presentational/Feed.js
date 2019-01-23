/*
	Presentational Component that shows a grid of FeedItems
	Displays information based upon the filter given to show the appropriate feed
	Allows for users to traverse through pages of results
*/

import React from 'react';
import FeedItem from './FeedItem';
import { Grid, Segment, Button } from 'semantic-ui-react';
import { FILTER_ACTIONS } from '../../actions';
import axios from 'axios';
const { TRENDING, UPCOMING, POPULAR, TOP_RATED, SEARCH, WATCH_LATER, FAVORITES } = FILTER_ACTIONS;


const Feed = (props) => {
	let feed = [];
	const filter = props.filter;
	if (filter === TRENDING) feed = props.trending;
	else if (filter === UPCOMING) feed = props.upcoming;
	else if (filter === POPULAR) feed = props.popular;
	else if (filter === TOP_RATED) feed = props.top_rated;
	else if (filter === SEARCH) feed = props.search;

	const default_state = { page: 0, total_pages: 0, data: feed }
	const { page, total_pages, data } = (feed.data) ? feed : default_state;

	const items = data.map((element, index) =>
		<FeedItem key={index} data={element} />
	);

	const ChangePage = (number) => {
		const { onUpdateFeed, keyword, genres } = props;
		const feeds = [
			[TRENDING, 'trending'],
			[UPCOMING, 'upcoming'],
			[TOP_RATED, 'top_rated'],
			[POPULAR, 'popular'],
		];
		if (filter === SEARCH && genres.length !== 0) {
			axios.post(`/api/moviedata/genres/${page+number}`, {
				genres
			})
			.then(res => onUpdateFeed(SEARCH, res.data))
			.catch(err => console.error(err));
		}
		else {
			let feed;
			feeds.forEach((element) => feed = (element[0] === filter) ? element[1] : feed);
			const url = (filter === SEARCH) ? `api/moviedata/search/${keyword}/${page + number}` : `/api/moviedata/${feed}/${page + number}`;
			axios.get(url)
				.then(res => onUpdateFeed(filter, res.data))
				.catch(err => console.error(err));
		}
	}

	return (
		<Segment inverted={true} style={{ "margin": "0" }}>
			<Grid relaxed={true} padded={true}>
				<Grid.Row centered={true}>
					{items}
				</Grid.Row>
			</Grid>
			{feed.data ?
				<Segment textAlign='center' inverted={true}>
					<Button.Group >
						<Button disabled={page === 1} icon='left arrow' onClick={() => ChangePage(-1)} />
						<Button disabled={true}>{page}</Button>
						<Button disabled={page === total_pages} icon='right arrow' onClick={() => ChangePage(1)} />
					</Button.Group>
				</Segment>
				:
				null
			}
		</Segment>
	);
}

export default Feed;