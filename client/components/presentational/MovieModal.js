import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const MovieModal = (props) => {
    console.log(props);
    const {title, overview, vote_average, release_date, backdrop_path} = props;
    
    const style = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    }

    const modalStyle = {
            backgroundColor: "black",
            margin: "1em",
            boxShadow: "0 4px 100px 0 rgba(255, 255, 255, 0.5), 0 6px 20px 0 rgba(255, 255, 255, 0.3)"
        }
    
    const infoStyle = {
        backgroundColor:"black", 
        color: "white", 
        textAlign: "center",
        borderBottom: "1px solid white",
        paddingBottom: "8px"
    }
    
    return (
        <Modal size="small" style={modalStyle} trigger={<Button style={{backgroundColor: "white"}}>Info</Button>}>
            <Modal.Header style={{backgroundColor:"black", color:"white", textAlign:"center"}}>{title}</Modal.Header>
            <Image  size="massive" fluid="true" src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} />
            <Header style={infoStyle}>Rating: {vote_average} Release: {release_date}</Header>
        
            <Modal.Description>
                <p style={{color:"white", textAlign:"center", fontSize: "20px", margin: "1em"}}>{overview}</p>
            </Modal.Description>

        </Modal>
    );
}

export default MovieModal;