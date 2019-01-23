//Feed component to display movie results based on sorting
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
		const { onUpdateFeed, keyword } = props;
		const feeds = [
			[TRENDING, 'trending'],
			[UPCOMING, 'upcoming'],
			[TOP_RATED, 'top_rated'],
			[POPULAR, 'popular'],
		];
		let feed;
		feeds.forEach((element) => feed = (element[0] === filter) ? element[1] : feed);
		const url = (filter === SEARCH) ? `api/moviedata/search/${keyword}/${page + number}` : `/api/moviedata/${feed}/${page + number}`;
		axios.get(url)
			.then(res => onUpdateFeed(filter, res.data))
			.catch(err => console.error(err));
	}

	//Removes '_' from the filter to display
	var filterDisplay  = (filter) => {
		if (filter !== "TOP_RATED") return filter;
		else return "TOP RATED";

	}
	const style = {
		margin: "0",
		background: "linear-gradient(to top left, rgba(24, 24, 24, 0.7 ), rgba(0,0,0,1))"
	}

	return (
		<Segment id="segment" inverted={true} style={style}>
			<Grid relaxed={true} padded={true}>
				<Grid.Row style={{ "marginLeft": "2em" }}>
					<h2>{filterDisplay(props.filter)}</h2>
				</Grid.Row>
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