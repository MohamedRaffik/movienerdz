import React from 'react';
import FeedItem from './FeedItem';


const feedStyling = {
	"display": "inline-block",
	"margin": "20px"



}

class Feed extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		console.log(this.props.results);
		var items = this.props.results.map((row) =>
			
			<FeedItem data={row}/>
		)
		console.log(items);
		return(
			<div className="feed" style={feedStyling}>
			<h2>results:</h2>
			{items}	
			</div>

		);
	}
}

export default Feed;