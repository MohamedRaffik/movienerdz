import {Card, Image} from 'semantic-ui-react';
import React from 'react';

const FeedItem = (props) => {
	const style = {
		margin: "1em",
		boxShadow: "0 4px 8px 0 rgba(255, 255, 255, 0.5), 0 6px 20px 0 rgba(255, 255, 255, 0.3)"
	}

	let { overview, release_date, poster_path } = props.data;
	if (!poster_path) poster_path = props.data.backdrop_path;
	let title = props.data.name ? props.data.name : props.data.title;
	
	return (
		<Card style={style}>
			<Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
			<Card.Content>
				<Card.Header>{title}</Card.Header>
				<Card.Meta>
					<span className="movie">{release_date}</span>
				</Card.Meta>
			</Card.Content>
		</Card>
	);
}

export default FeedItem;


