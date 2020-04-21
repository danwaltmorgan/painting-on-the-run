import React from 'react'

import pics from './images/imgObj'

// import Slider from 'react-animated-slider'
// import 'react-animated-slider/build/horizontal.css'

import { Controller, Scene } from 'react-scrollmagic'

class SlideImage extends React.Component {



  render() {


    const photos = pics.map((pic, idx) => {
      return (
          <img
            src={pic.pic}
            alt={pic.alt}
            key={idx}
            className="photos"
            ></img>
      )
    })
    return (
      <div className="img-div">
          {photos}
         {/* <Slider */}
         {/* autoplay="1500"> */}
         {/* </Slider> */}
      </div>
    )
  }
}

export default SlideImage
