import {Card, Image} from 'semantic-ui-react';
import React from 'react';

const FeedItem = (props) => {
	const { overview, release_date, poster_path } = props.data;
	let title = props.data.name ? props.data.name : props.data.title;
	return (
		<Card style={{"margin": "1em"}}>
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


