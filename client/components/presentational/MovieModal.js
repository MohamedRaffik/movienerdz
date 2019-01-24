/*
    Modal component pop-up to display more information
*/
import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import ButtonsApp from './ButtonsApp';
import './MovieModal.css';

class MovieModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  //When the modal is open prevent rerender when passed new props

  formatDate = (date) => {
    if (!date) return date;
    let newDate = date.replace('-', '/').replace('-', '/');
    newDate = newDate.slice(5, 10) + '/' + newDate.slice(0, 4);
    return newDate;
  }

  //Change the state to determine if modal is open
  modalStateChange = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }


  render() {
    const { movie, loggedIn } = this.props;
    const { overview, vote_average, release_date, backdrop_path } = movie;

    let title = movie.name ? movie.name : movie.title;

    const buttonStyle = {
      left: 0,
      position: "absolute",
      bottom: "2%",
      paddingLeft: "20px"
    }

    return (
      <Modal id="modal" size="small" onOpen={this.modalStateChange} onClose={this.modalStateChange} trigger={<Button id="info-button" style={{ color: "white", fontWeight: "bold", borderRadius: "20px" }}>More Info</Button>}>
        <Modal.Header id="movie-title">
          {title}
        </Modal.Header>
        <Image size="massive" src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} />
        <Header id="movie-info">
          <div>
            <img id="star" src="https://img.icons8.com/nolan/64/000000/star.png" />
            {vote_average}
            <img id="calendar" src="https://img.icons8.com/nolan/64/000000/tear-off-calendar.png" />
            <span id="release-date">{this.formatDate(release_date)}</span>
          </div>
        </Header>
        <Modal.Description style={{ paddingBottom: "35px" }}>
          <p id="overview">{overview}</p>
          {loggedIn ? <ButtonsApp style={buttonStyle} isFavorited={this.props.isFavorited} isWatchLater={this.props.isWatchLater} movie={this.props.movie} /> : null}
        </Modal.Description>
      </Modal>
    );
  };
}

export default MovieModal;