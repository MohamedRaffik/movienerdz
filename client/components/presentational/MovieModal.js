import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import './MovieModal.css';

const MovieModal = (props) => {
    console.log(props);
    const {title, overview, vote_average, release_date, backdrop_path} = props;

    return (
        <Modal id="modal" size="small" trigger={<Button style={{backgroundColor: "white"}}>More Info</Button>}>
            <Modal.Header id="movie-title">{title}</Modal.Header>
            <Image  size="massive" fluid="true" src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} />
            <Header id="movie-info">
                 <div>
                    <img id="star" src="https://img.icons8.com/nolan/64/000000/star.png"  />
                    {vote_average}

                    <img id="calendar" src="https://img.icons8.com/nolan/64/000000/tear-off-calendar.png"  />
                    <span id="release-date">{release_date}</span>
                </div></Header>
        
            <Modal.Description>
                <p id="overview">{overview}</p>
            </Modal.Description>

        </Modal>
    );
}

export default MovieModal;