/*
    Buttons is a component that renders a favorite and watch later icon to allow users to
    add or remove the movie from the favorites or watch later lists
*/

import React, { Component } from 'react';
import './Buttons.css';


class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavorited: false,
            isWatchLater: false
        }
    }

    //If the movie passed through props is in the favorite/watch_later list then toggle true
    componentDidMount() {
        this.props.favorites.forEach((movieObject) => {
            //The api returned can return either original_title or title
            let movieTitle = movieObject.original_title ? movieObject.original_title : movieObject.title;
            let propsMovieTitle = this.props.movie.original_title ? this.props.movie.original_title : this.props.movie.title;
            if (movieTitle === propsMovieTitle) this.setState({ isFavorited: true });
        });

        this.props.watch_later.forEach((movieObject) => {
            let movieTitle = movieObject.original_title ? movieObject.original_title : movieObject.title;
            let propsMovieTitle = this.props.movie.original_title ? this.props.movie.original_title : this.props.movie.title;
            if (movieTitle === propsMovieTitle) this.setState({ isWatchLater: true });
        });
    }


    //If the icon is highlighted the movie is on the list, so remove it otherwise add to favorites/watch_later
    onClickHeart = () => {
        if (this.state.isFavorited) { this.props.onRemoveFavorite(this.props.movie); }
        else this.props.onAddFavorite(this.props.movie);
        this.setState({ isFavorited: !this.state.isFavorited });
    }

    onClickClock = () => {
        if (this.state.isWatchLater) this.props.onRemoveWatchLater(this.props.movie);
        else this.props.onAddWatchLater(this.props.movie);
        this.setState({ isWatchLater: !this.state.isWatchLater });
    }

    render() {
        const heartStyle = {
            height: "25px",
            width: "auto",
            cursor: "pointer"
        }

        const clockStyle = {
            paddingLeft: "5px",
            height: "25px",
            width: "auto",
            cursor: "pointer"
        }

        //If the movie is on the list display a highlighted icon, otherwise display only the outline
        let heart = this.state.isFavorited ? "https://img.icons8.com/ios/50/000000/like-filled.png" : "https://img.icons8.com/ios/50/000000/like.png";
        let clock = this.state.isWatchLater ? "https://img.icons8.com/ios/50/000000/timer-filled.png" : "https://img.icons8.com/ios/50/000000/timer.png"
        let style;
        style = this.props.style ? style = this.props.style : { left: ".3", position: "absolute" };
        return (

            <div style={style}>
                <img id="heart" src={heart} onClick={this.onClickHeart} style={heartStyle} />
                <img id="clock" src={clock} onClick={this.onClickClock} style={clockStyle} />
            </div>
        );
    }
}

export default Buttons;