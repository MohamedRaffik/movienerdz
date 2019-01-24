//MoveSwipe component movie carousel to display now playing
import React, { Component } from 'react';
import { Segment, Dimmer, Loader, Image } from 'semantic-ui-react';
import MovieModal from './MovieModal';
import './MovieSwipe.css';

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={`slide-arrow ${direction}`}
    onClick={clickFunction}>
    <img src={glyph}></img>
  </div>
);

const ImageSlide = (props) => {
  const styles = {
    backgroundImage: `url("https://image.tmdb.org/t/p/w1280${props.data.backdrop_path}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  //Set data from props
  const releaseDate = props.data.release_date;
  const title = props.data.name ? props.data.name : props.data.title;
  const rating = props.data.vote_average;
  const { overview, release_date, backdrop_path, vote_average } = props.data;

  const formatDate = (date) => {
    let newDate = date.replace('-', '/').replace('-', '/');
    newDate = newDate.slice(5, 10) + '/' + newDate.slice(0, 4);
    return newDate;
  }

  return (
    <div className="image-slide fade" style={styles}>
      <div className="movie-text">
        <div id="title">{title}</div>
        <br></br>
        <div id="rating">
          <img src="https://img.icons8.com/nolan/64/000000/star.png" id="star" />
          {rating}
          <img src="https://img.icons8.com/nolan/64/000000/tear-off-calendar.png" id="calendar" />
          <span id="release-date">{formatDate(releaseDate)}</span>
        </div>
        <br></br>
        <MovieModal title={title} overview={overview} release_date={release_date} backdrop_path={backdrop_path} vote_average={vote_average} />
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
    this.interval= 0;
  }

  //Set tick interval for slides
  componentDidMount() {
    this.interval = setInterval(() => this.NextSlide(), 4000);
  }

  PreviousSlide = () => {
    const playing_now = this.props.playing_now.data;
    const index = this.state.index === 0 ? playing_now.length - 1 : this.state.index - 1;
    this.setState({ index: index });
    clearInterval(this.interval);
    this.interval=setInterval(() => this.NextSlide(), 4000);
  }

  NextSlide = () => {
    const playing_now = this.props.playing_now.data;
    const index = this.state.index === playing_now.length - 1 ? 0 : this.state.index + 1;
    this.setState({ index: index });
    clearInterval(this.interval);
    this.interval=setInterval(() => this.NextSlide(), 4000);
  }

  render() {
    const { index } = this.state;
    const playing_now = this.props.playing_now.data;
    return (
      !playing_now ?
        <Segment>
          <Dimmer active>
            <Loader size='large'>Downloading RAM</Loader>
          </Dimmer>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
        :
        <div className="carousel">
          <Arrow direction="left" clickFunction={this.PreviousSlide} glyph="https://img.icons8.com/nolan/64/000000/chevron-left.png" />
          <ImageSlide data={playing_now[index]} />
          <Arrow direction="right" clickFunction={this.NextSlide} glyph="https://img.icons8.com/nolan/64/000000/chevron-right.png" />
        </div>
    );
  }
}

export default MovieSwipe;