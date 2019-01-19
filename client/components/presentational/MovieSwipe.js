import React, { Component } from 'react';
import './MovieSwipe.css';

class MovieSwipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1
        }
    }

    // Next/previous controls
    plusSlides = (n) => {
        //let newIndex = this.state.newIndex + n;
        //this.setState({ slideIndex: newIndex })
        // this.showSlides();
    }
    /*
        // Thumbnail image controls
        currentSlide = (n) => {
            showSlides(slideIndex = n);
        }
    */
    showSlides = () => {
        var slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        //slideIndex++;
        let newIndex = this.state.slideIndex + 1;
        this.setState({ slideIndex: newIndex })
        if (this.state.slideIndex > slides.length) { this.setState({ slideIndex: 1 }) }
        slides[this.state.slideIndex - 1].style.display = "block";
    }
    backSlides = () => {
        var slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        //slideIndex++;
        let newIndex = this.state.slideIndex - 1;
        this.setState({ slideIndex: newIndex })
        if (this.state.slideIndex < slides.length) { this.setState({ slideIndex: 1 }) }
        slides[this.state.slideIndex - 1].style.display = "block";
    }


    componentDidMount() {
        //   setTimeout(() => this.showSlides(), 1000);

        this.showSlides();
        setInterval(
            function () {
                this.showSlides();
                console.log(this.state.slideIndex)
            }
                .bind(this),
            3000
        );
    }



    render() {
        return (
            <div>

                <div className="slideshow-container">


                    <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                        <img src="client\img\header.jpg" width="800px"></img>
                        <div className="text">Caption Text</div>
                    </div>

                    <div className="mySlides fade">
                        <div className="numbertext">2 / 3</div>
                        <img src="client\img\ny1.jpg" width="800px"></img>
                        <div className="text">Caption Two</div>
                    </div>

                    <div className="mySlides fade">
                        <div className="numbertext">3 / 3</div>
                        <img src="client\img\blue.jpg" width="800px"></img>
                        <div className="text">Caption Three</div>
                    </div>
                    <button className="prev" onClick={this.backSlides}>{"<"} </button>
                    <button className="next" onClick={this.showSlides}>></button>
                    <button onClick={this.showSlides}>Next</button>


                </div>
                <br></br>

            </div>
        );
    }

}

export default MovieSwipe;