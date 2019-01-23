//Modal component pop-up to display more information
import React, {Component} from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import './MovieModal.css';

class MovieModal extends Component {
    constructor(props){
        super(props);
    }
/* Current bug: Movie Slideshow always rendering for first movie bumble bee regardless of movie slide
    //If new props are passed prevent rerender of modal
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.props) return false;
        else return true;
    }
*/
    render(){
        const {title, overview, vote_average, release_date, backdrop_path} = this.props;

        return (
            <Modal id="modal" size="small" trigger={<Button style={{backgroundColor: "rgba(255,255,255,.0)", color:"white", fontWeight:"bold" }}>More Info</Button>}>
                <Modal.Header id="movie-title">{title}</Modal.Header>
                <Image  size="massive" src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} />
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
    };
}

export default MovieModal;