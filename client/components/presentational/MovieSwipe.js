import React, { Component } from 'react';
import './MovieSwipe.css';

const imgUrls = [
	"https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781", 
	"https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
	"https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
	"https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
	"https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
];

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);


const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};
	
	return (
		<div className="image-slide" style={styles}>
      { /* Insert Title TEXT */ }
    </div>
	);
}

class MovieSwipe extends Component {
	constructor (props) {
		super(props);
		this.state = {
			index: 0
		};
	}
	
	PreviousSlide = () => {
		const index =  this.state.index === 0 ? imgUrls.length - 1 : this.state.index - 1;
		this.setState({ index: index });
	}
	
	NextSlide = () => {
		const index =  this.state.index === imgUrls.length - 1 ? 0 : this.state.index + 1;
		this.setState({ index: index });
	}
	
	render () {
		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.PreviousSlide } glyph="&#9664;" />
				<ImageSlide url={ imgUrls[this.state.index] } />
				<Arrow direction="right" clickFunction={ this.NextSlide } glyph="&#9654;" />
			</div>
		);
	}
}

export default MovieSwipe;