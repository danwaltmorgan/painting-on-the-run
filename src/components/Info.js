import React from 'react'
import Form from './Form'

class Info extends React.Component {
  render() {
    return (
      <div id="info">
        <div id="info-section" className="section">
          <p>Founded in Glendale, Ohio by Marshall Bohlander, <b>{this.props.title}</b> is an affordable, and professional service. The father-son team has over 50 years of experience in Carpentry and Painting.</p>
          <p>We specialize in:</p>
          <ul>
            <li>Painting - Residential homes, Interior and Exterior Spaces, as well as touchups and anything else you need painted</li>
            <li>Carpentry - Renovations, Interior/Exterior Trim, Framing, and Replacement of rotted wood.</li>
            <li>Drywall</li>
            <li>Gutter repair and cleaning</li>
            <li>Basic masonry repairs</li>
          </ul>
          <p>We pride ourselves in our attention to detail and strive to produce a quality, professional product.</p>
        </div>

        <div id="contact" className="section">
          <h2><u>Contact</u></h2>
          <p>If you would like more information, <br /> please contact Marshall Bohlander:</p>
          <p>Phone: <b>(513) 312-7322</b></p>
          <p>Email: <b>mb0694@yahoo.com</b></p>
          <Form />
        </div>
      </div>
    )
  }
}

export default Info
