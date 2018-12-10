import React, { Component } from 'react';

import Slide from   './Slide';
import Right from   './Right';
import Left from    './Left';

class Ranking extends Component {
  constructor(props) {
     super(props)

     this.state = {
       items: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0
     }

     console.log(this.props)
  }

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.items.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
   }

  render(){
    return(
      <div>
        <div className="sliderRanking" style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
        }}>

          {
            this.state.items.map((item, i) => (
              <Slide key={i} item={item} />
            ))
          }

          <Left   goToPrevSlide={this.goToPrevSlide} />
          <Right  goToNextSlide={this.goToNextSlide} />
        </div>
      </div>
    )
  }
}

export default Ranking;
