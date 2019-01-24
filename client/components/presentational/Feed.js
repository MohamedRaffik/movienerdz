//Feed component to display movie results based on sorting
import React from 'react';
import FeedItemApp from './FeedItemApp';
import { Grid, Segment, Button } from 'semantic-ui-react';
import { FILTER_ACTIONS } from '../../actions';
import axios from 'axios';
import { Genres } from '../constants';
const { TRENDING, UPCOMING, POPULAR, TOP_RATED, SEARCH, WATCH_LATER, FAVORITES } = FILTER_ACTIONS;


const Feed = (props) => {
	let feed = [];
	const filter = props.filter;
	if (filter === TRENDING) feed = props.trending;
	else if (filter === UPCOMING) feed = props.upcoming;
	else if (filter === POPULAR) feed = props.popular;
	else if (filter === TOP_RATED) feed = props.top_rated;
	else if (filter === SEARCH) feed = props.search;
	else if (filter === WATCH_LATER) feed = props.watch_later;
	else if (filter === FAVORITES) feed = props.favorites;

	const default_state = { page: 0, total_pages: 0, data: feed }
	const { page, total_pages, data } = (feed.data) ? feed : default_state;

	const items = data.map((element, index) =>
		<FeedItemApp key={index} data={element} />
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
			axios.post(`/api/moviedata/genres/${page + number}`, {
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

	//Removes '_' from the filter to display
	const filterDisplay = (filter) => {
		const { genres, keyword } = props;
		let genre_string = '';
		if (genres.length > 0) {
			genres.forEach((element, index) => {
				Genres.forEach((e) => genre_string += (e.id === element) ? e.name : '');
				genre_string += (index + 1 === genres.length) ? '' : ', ';
			});
		}
		let new_filter = filter.toLowerCase();
		new_filter = new_filter.replace(new_filter[0], new_filter[0].toUpperCase());
		if (filter === TOP_RATED) new_filter = 'Top Rated'
		else if (filter === WATCH_LATER) new_filter = 'Watch Later'
		else if (filter === SEARCH) new_filter += (genres.length === 0) ? `by Keyword: ${keyword}` : ` by Genre: ${genre_string}`
		return new_filter
	}
	const style = {
		margin: "0",
		background: "linear-gradient(to top left, rgba(24, 24, 24, 0.7 ), rgba(0,0,0,1))",
		borderRadius: "0px"
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
				<Segment textAlign='center' inverted={true} style={{ background: "rgba(0,0,0,0)" }}>
					<Button.Group>
						<Button disabled={page === 1} icon='angle double left' onClick={() => ChangePage(1 - page)} />
						<Button disabled={page === 1} icon='angle left' onClick={() => ChangePage(-1)} />
						<Button disabled={true}>{page}/{total_pages}</Button>
						<Button disabled={page === total_pages} icon='angle right' onClick={() => ChangePage(1)} />
						<Button disabled={page === total_pages} icon='angle double right' onClick={() => ChangePage(total_pages - page)} />
					</Button.Group>
				</Segment>
				:
				<Segment textAlign='center' inverted={true} style={{ background: "rgba(0,0,0,0)" }}>
					<Button disabled={true}>1</Button>
				</Segment>
			}
		</Segment>
	);
}

export default Feed;