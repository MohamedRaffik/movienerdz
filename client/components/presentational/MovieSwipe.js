import React, { Component } from 'react';
import './MovieSwipe.css';
import Ratio from 'react-ratio';

class MovieSwipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1,
            slides: ["https://image.tmdb.org/t/p/w1280/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg", "https://image.tmdb.org/t/p/w1280/hMANgfPHR1tRObNp2oPiOi9mMlz.jpg"]
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
        let newIndex = this.state.slideIndex - 1;
        this.setState({ slideIndex: newIndex })
        if (this.state.slideIndex < slides.length) { this.setState({ slideIndex: 1 }) }
        slides[this.state.slideIndex - 1].style.display = "block";
    }

    componentDidMount() {
        this.showSlides();
        setInterval(
            function () {
                this.showSlides();
            }
                .bind(this),
            3000
        );
    }

    render() {
        const style = {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url(https://image.tmdb.org/t/p/w1280/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg)"
        }

        const style2 = {
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url(https://image.tmdb.org/t/p/w1280/5Ka49BWWyKMXr93YMbH5wLN7aAM.jpg)"
        }

        let movies = this.state.slides.slice().map((movie) => {
            const style = {
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${movie})`
            }
            let text = "Movie";
            let caption = "Caption";
            return (
                <div className="mySlides fade" style={style} key={movie}>
                    <div className="text">{text}
                        <br></br><br></br>
                        {caption}
                    </div>
                </div>
            );
        });

        return (
            <div>
                <Ratio ratio={16 / 9}>
                    <div className="slideshow-container" onClick={() => console.log(this.state.slideIndex)}>
                        {movies}
                        <div className="slideArrow">
                            <img src="https://img.icons8.com/nolan/64/000000/chevron-left.png" className="prev" onClick={this.backSlides} />
                            <img src="https://img.icons8.com/nolan/64/000000/chevron-right.png" className="next" onClick={this.showSlides} />
                        </div>
                    </div>
                </Ratio>
            </div >
        );
    }
}

export default MovieSwipe;