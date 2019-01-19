import {Card, Image} from 'semantic-ui-react';
import React from 'react';

const feedItemStyling = {
	"margin": "1rem"



}

class FeedItem extends React.Component{
	render(){

		const {title, description, date} = this.props.data;
		return(
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
}
export default FeedItem;


