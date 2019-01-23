//Modal component pop-up to display more information
import React, {Component} from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import './MovieModal.css';

class MovieModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    //When the modal is open prevent rerender when passed new props
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.isOpen) {
            if (nextProps !== this.props) return false;
            else return true;
        }
       return true;
    }

    formatDate = (date) => {
        if (!date) return date;
        let newDate = date.replace('-', '/').replace('-', '/');
        newDate = newDate.slice(5, 10) + '/' + newDate.slice(0, 4);
        return newDate;
    }

    //Change the state to determine if modal is open
    modalStateChange = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){
        const {title, overview, vote_average, release_date, backdrop_path} = this.props;

        return (
            <Modal id="modal" size="small" onOpen={this.modalStateChange} onClose={this.modalStateChange} trigger={<Button style={{backgroundColor: "rgba(255,255,255,1)", fontWeight:"bold" }}>More Info</Button>}>
                <Modal.Header id="movie-title">{title}</Modal.Header>
                <Image  size="massive" src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} />
                <Header id="movie-info">
                    <div>
                        <img id="star" src="https://img.icons8.com/nolan/64/000000/star.png"  />
                        {vote_average}
                        <img id="calendar" src="https://img.icons8.com/nolan/64/000000/tear-off-calendar.png"  />
                        <span id="release-date">{this.formatDate(release_date)}</span>
                    </div></Header>          
                <Modal.Description>
                    <p id="overview">{overview}</p>
                </Modal.Description>
            </Modal>
        );
    };
}

export default MovieModal;