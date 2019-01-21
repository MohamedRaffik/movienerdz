import React, { Component } from 'react';
import './MovieSwipe.css';
import Ratio from 'react-ratio';

class MovieSwipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      slides: ["https://image.tmdb.org/t/p/w1280/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg", "https://image.tmdb.org/t/p/w1280/hMANgfPHR1tRObNp2oPiOi9mMlz.jpg"]
    }
    this.FowardSlides = this.FowardSlides.bind(this);
  }

  FowardSlides = () => {
    var slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    this.setState({ slideIndex: this.state.slideIndex + 1 === slides.length ? 0 : this.state.slideIndex + 1 }, () => {
      slides[this.state.slideIndex].style.display = "block";
    });
  }

  BackSlides = () => {
    var slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    this.setState({ slideIndex: this.state.slideIndex - 1 < 0 ? slides.length - 1 : this.state.slideIndex - 1 }, () => {
      slides[this.state.slideIndex].style.display = "block";
    })
  }

  componentDidMount() {
    setInterval( () => this.FowardSlides(), 3000);
  }

  render() {
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
          <div className="slideshow-container">
            {movies}
            <div className="slideArrow">
              <img src="https://img.icons8.com/nolan/64/000000/chevron-left.png" className="prev" onClick={this.BackSlides} />
              <img src="https://img.icons8.com/nolan/64/000000/chevron-right.png" className="next" onClick={this.FowardSlides} />
            </div>
          </div>
        </Ratio>
      </div >
    );
  }
}

export default MovieSwipe;