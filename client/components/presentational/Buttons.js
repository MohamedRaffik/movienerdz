/*
    Buttons is a component that renders a favorite and watch later icon to allow users to
    add or remove the movie from the favorites or watch later lists
*/

import React, { Component } from 'react';
import { FILTER_ACTIONS } from '../../actions';
import axios from 'axios';
const { FAVORITES, WATCH_LATER } = FILTER_ACTIONS;
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
    const { favorites, watch_later, movie } = this.props;
    favorites.forEach((movieObject) => {
      if (movieObject.id === movie.id) this.setState({ isFavorited: true });
    });

    watch_later.forEach((movieObject) => {
      if (movieObject.id === movie.id) this.setState({ isWatchLater: true });
    });
  }

  //If the icon is highlighted the movie is on the list, so remove it otherwise add to favorites/watch_later
  onClickHeart = () => {
    const { isFavorited } = this.state;
    const { movie, favorites, onUpdateFeed, username } = this.props;
    let newFavorites;
    if (isFavorited) newFavorites = favorites.filter((element) => movie.id !== element.id);
    else newFavorites = [...favorites, movie];
    this.setState({ isFavorited: !isFavorited }, () => {
      axios.post('/api/update/favorites', {
        username,
        favorites: newFavorites
      })
        .then(res => {})
        .catch(err => console.error(err));
      onUpdateFeed(FAVORITES, newFavorites);
    });
  }

  onClickClock = () => {
    const { isWatchLater } = this.state;
    const { movie, watch_later, onUpdateFeed, username } = this.props;
    let newWatchLater;
    if (isWatchLater) newWatchLater = watch_later.filter((element) => movie.id !== element.id);
    else newWatchLater = [...watch_later, movie]
    this.setState({ isWatchLater: !isWatchLater }, () => {
      axios.post('/api/update/later', {
        username,
        watchLater: newWatchLater
      })
        .then(res => {})
        .catch(err => console.error(err));
      onUpdateFeed(WATCH_LATER, newWatchLater);
    });
  }

  render() {
    const { isFavorited, isWatchLater } = this.state;
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
    const heart = isFavorited ? "https://img.icons8.com/ios/50/000000/like-filled.png" : "https://img.icons8.com/ios/50/000000/like.png";
    const clock = isWatchLater ? "https://img.icons8.com/ios/50/000000/timer-filled.png" : "https://img.icons8.com/ios/50/000000/timer.png"

    let style = this.props.style ? style = this.props.style : { left: ".3", position: "absolute" };

    return (
      <div style={style}>
        <img id="heart" src={heart} onClick={this.onClickHeart} style={heartStyle} />
        <img id="clock" src={clock} onClick={this.onClickClock} style={clockStyle} />
      </div>
    );
  }
}

export default Buttons;