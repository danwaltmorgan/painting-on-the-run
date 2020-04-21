import React from 'react'
import Form from './Form'

class Info extends React.Component {
  render() {
    return (
      <div id="info">
        <div id="info-section" className="section">
          <p>Founded in Glendale, Ohio by Marshall Bohlander, <b>Just A-Paintin' & Renovation</b> is a fast, affordable, and professional service. The father-son team has over 50 years of experience in Carpentry and Painting.</p>
          {/* <p>Just A-Paintin' & Renovations was founded in Glendale, Ohio by Marshall Bohlander. Fast, affordable and professional, this father and son team with over 50 years of experience. We are hard workers that value a quality product.</p> */}
          <p>We specialize in:</p>
          <ul>
            <li>Painting - Interior and Exterior Spaces as well as touchups and anything else you need painted</li>
            <li>Carpentry - Renovations, Interior/Exterior Trim, Framing, and Replacement of rotted wood.</li>
            <li>Drywall</li>
            <li>Gutter Work</li>
            <li>Basic Brick Work</li>
          </ul>
          <p>We pride ourselves in our attention to detail and strive to produce a quality, professional product.</p>
        </div>

        <div id="contact" className="section">
          <h2><u>Contact</u></h2>
          <p>If you would like more information, <br /> please contact Marshall Bohlander:</p>
          <p>Phone: <b>(513) 312-7322</b></p>
          <Form />
        </div>
      </div>
    )
  }
}

export default Info
