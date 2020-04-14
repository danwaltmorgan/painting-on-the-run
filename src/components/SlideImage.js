import React from 'react'
import house from './images/white_house.png'
import roof from './images/wh_roof.png'
import brick from './images/brick-front.png'
import back from './images/brick-back.png'

import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'

class SlideImage extends React.Component {


  render() {
    const pics = [{pic: house, alt: "picture of a white house"}, {pic: roof, alt: "picture of the roof of a house, looking down"}, {pic: brick, alt: "Picture of a brick house from the front"}, {pic: back, alt: "picture of a brick house from the back. Most is painted"}]
    const photos = pics.map((pic, idx) => {
      return <img src={pic.pic} alt={pic.alt} key={idx}></img>
    })
    return (
      <div className="img-div">
         <Slider height="100%" autoplay="2000">
           {photos}
         </Slider>
      </div>
    )
  }
}

export default SlideImage
