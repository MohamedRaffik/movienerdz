import React, { Component } from 'react';
import './MovieSwipe.css';

const imgUrls = [
    "https://image.tmdb.org/t/p/w1280/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg",
    "https://image.tmdb.org/t/p/w1280/hMANgfPHR1tRObNp2oPiOi9mMlz.jpg",
    "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
    "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
    "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
    "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
    "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
];

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
        className={`slide-arrow ${direction}`}
        onClick={clickFunction}>
        <img src={glyph}></img>
    </div>
);


const ImageSlide = ({ url, onClick }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    const title = "Movie";
    const caption = " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
    const rating = "8.0";
    return (
        <div className="image-slide fade" style={styles} onClick={onClick}>
            <div className="movie-text">
                <div id="title">{title}</div>

                <div id="rating">
                    <img src="https://img.icons8.com/nolan/64/000000/star.png" id="star" />
                    {rating}
                </div>
                <br></br>
                <div className="movie-caption">{caption}</div>

            </div>
        </div>
    );
}

class MovieSwipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    componentDidMount() {
        setInterval(() => this.NextSlide(), 4000);
    }

    PreviousSlide = () => {
        const index = this.state.index === 0 ? imgUrls.length - 1 : this.state.index - 1;
        this.setState({ index: index });
    }

    NextSlide = () => {
        const index = this.state.index === imgUrls.length - 1 ? 0 : this.state.index + 1;
        this.setState({ index: index });
    }

    onClick = () => {
        console.log(this.state.index)
    }

    render() {
        return (
            <div className="carousel">
                <Arrow direction="left" clickFunction={this.PreviousSlide} glyph="https://img.icons8.com/nolan/64/000000/chevron-left.png" />
                <ImageSlide url={imgUrls[this.state.index]} onClick={this.onClick} />
                <Arrow direction="right" clickFunction={this.NextSlide} glyph="https://img.icons8.com/nolan/64/000000/chevron-right.png" />
            </div>
        );
    }
}

export default MovieSwipe;