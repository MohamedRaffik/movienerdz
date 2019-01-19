import {Card, Image} from 'semantic-ui-react';
import React from 'react';

const FeedItem = (props) => {

	const feedItemStyling = {
		"margin": "1rem"
	}
	
	const { title, description, date } = props.data;

	return (
		<Card style={feedItemStyling}>
			<Card.Content>
				<Card.Header>{title}</Card.Header>
				<Card.Meta>
					<span className="movie">{date}</span>
				</Card.Meta>
				<Card.Description>{description}</Card.Description>
			</Card.Content>
		</Card>
	);
}

export default FeedItem;


