import {Card, Image} from 'semantic-ui-react';
import React from 'react';
import MovieModal from './MovieModal'

const FeedItem = (props) => {
	const style = {
		margin: "1em",
		boxShadow: "0 4px 8px 0 rgba(255, 255, 255, 0.5), 0 6px 20px 0 rgba(255, 255, 255, 0.3)"
	}
	const { overview, release_date, poster_path } = props.data;
	let title = props.data.name ? props.data.name : props.data.title;
	return (
		<Card style={style}>
			<Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
			<Card.Content>
				<Card.Header>{title}</Card.Header>
				<Card.Meta>
					<span className="movie">{release_date}</span>
				</Card.Meta>
				<MovieModal/>
			</Card.Content>
		</Card>
	);
}

export default FeedItem;


