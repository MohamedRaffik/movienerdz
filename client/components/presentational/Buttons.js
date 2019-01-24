/*
    Buttons is a component that renders a favorite and watch later icon to allow users to
    add or remove the movie from the favorites or watch later lists
*/

import React, { Component } from 'react';
import { FILTER_ACTIONS } from '../../actions';
import axios from 'axios';
const { FAVORITES, WATCH_LATER } = FILTER_ACTIONS;
import './Buttons.css';


const Buttons = (props) => {

  //If the icon is highlighted the movie is on the list, so remove it otherwise add to favorites/watch_later
  const onClickHeart = () => {
    const { movie, favorites, onUpdateFeed, username } = props;
    let newFavorites;
    if (isFavorited) newFavorites = favorites.filter((element) => movie.id !== element.id);
    else newFavorites = [...favorites, movie];
    axios.post('/api/update/favorites', {
      username,
      favorites: newFavorites
    })
      .then(res => { })
      .catch(err => console.error(err));
    onUpdateFeed(FAVORITES, newFavorites);
  }

  const onClickClock = () => {
    const { movie, watch_later, onUpdateFeed, username } = props;
    let newWatchLater;
    if (isWatchLater) newWatchLater = watch_later.filter((element) => movie.id !== element.id);
    else newWatchLater = [...watch_later, movie]
    axios.post('/api/update/later', {
      username,
      watchLater: newWatchLater
    })
      .then(res => { })
      .catch(err => console.error(err));
    onUpdateFeed(WATCH_LATER, newWatchLater);
  }

  const { isFavorited, isWatchLater } = props;

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

  let style = props.style ? style = props.style : { left: ".3", position: "absolute" };

  return (
    <div style={style}>
      <img id="heart" src={heart} onClick={onClickHeart} style={heartStyle} />
      <img id="clock" src={clock} onClick={onClickClock} style={clockStyle} />
    </div>
  );
}

export default Buttons;