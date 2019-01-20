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

        const style = {
            height: "50%"
        }
        return (
            <div>

                <div className="slideshow-container" height="50%">


                    <div className="mySlides fade" style={style}>
                        <div className="numbertext">1 / 3</div>
                        <img className="bg" src="client\img\header.jpg" ></img>
                        <div className="text">Movie 1</div>

                        <img src="https://img.icons8.com/nolan/64/000000/chevron-left.png" className="prev" onClick={this.backSlides} />
                        <img src="https://img.icons8.com/nolan/64/000000/chevron-right.png" className="next" onClick={this.showSlides} />                    </div>


                    <div className="mySlides fade" style={style}>
                        <div className="numbertext">2 / 2</div>
                        <img className="bg" src="client\img\ny1.jpg" ></img>
                        <div className="text">Movie 2</div>

                        <img src="https://img.icons8.com/nolan/64/000000/chevron-left.png" className="prev" onClick={this.backSlides} />
                        <img src="https://img.icons8.com/nolan/64/000000/chevron-right.png" className="next" onClick={this.showSlides} />

                    </div>

                </div>

            </div>


        );
    }

}

export default MovieSwipe;