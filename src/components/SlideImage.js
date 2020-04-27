import React from 'react'
import pics from './images/imgObj'
import HorizontalScroller from 'react-horizontal-scroll-container'

class SlideImage extends React.Component {
  render() {
    const photos = pics.map((pic, idx) => {
      return (
        <div className="img-div" key={"div" + idx}>
        <img
          src={pic.pic}
          alt={pic.alt}
          key={idx}
          className="photos"
          // className={pic.class}
          onMouseEnter={()=>{
            document.body.style.overflow = "hidden"
          }}
          onMouseLeave={()=>{
            document.body.style.overflow = "auto"
          }}
        />
        </div>
      )
    })
    return (
      <HorizontalScroller
         invert={true}
      >
        {photos}
      </HorizontalScroller>
    )
  }
}

export default SlideImage
