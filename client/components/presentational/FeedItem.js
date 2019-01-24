/*
	FeedItem is a card component that displays information for a single movie item
	Used in the feed component
*/

import { Card, Image } from 'semantic-ui-react';
import React from 'react';
import MovieModal from './MovieModal'

const FeedItem = (props) => {
	const style = {
		margin: "1em",
		boxShadow: "0 4px 8px 0 rgba(255, 255, 255, 0.5), 0 6px 20px 0 rgba(255, 255, 255, 0.3)",
		background: "black",
		paddingBottom: "20px"
	}
	const fontStyle= {
		color: "white",
		borderTop: "1px solid white",
		paddingTop: "10px",
		paddingBottom: "8px"
	}

	let { overview, release_date, poster_path, backdrop_path } = props.data;
	if (!poster_path) poster_path = props.data.backdrop_path;
	//if (!backdrop_path) backdrop_path = props.data.poster_path;
	let title = props.data.name ? props.data.name : props.data.title;
	let vote_average = props.data.vote_average;
	
	const onClick = () => {
		console.log("hi")
	}

	return (
		<Card style={style}>
			<Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
			<Card.Content >
				<Card.Header style={fontStyle}>{title}</Card.Header>
				<Card.Meta>
					<img id="star" src="https://img.icons8.com/nolan/64/000000/star.png"/><span className="movie" style={{color:"white"}}>{vote_average}</span>
				</Card.Meta>
				<MovieModal title={title} overview={overview} release_date={release_date} backdrop_path={backdrop_path} vote_average={vote_average}/>
				<br></br>
				<div style={{left:".3", position:"absolute"}}>
					<img id="star" src="https://img.icons8.com/ios/50/000000/like.png" onClick={onClick} style={{height:"30px", width:"auto", cursor: "pointer"}}/>
					<img id="star" src="https://img.icons8.com/ios/50/000000/timer.png" onClick={onClick} style={{paddingLeft : "5px", height:"25px", width:"auto", cursor: "pointer"}}/>
				</div>
			</Card.Content>
		</Card>
	);
}

export default FeedItem;


