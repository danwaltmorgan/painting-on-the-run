import React from 'react'
import Form from './Form'

class Info extends React.Component {
  render() {
    return (
      <div id="info">
        <div id="info-section" className="section">
          <p>Founded in Glendale, Ohio by Marshall Bohlander, <b>Painting How You Want It</b> is a location independent service that is fast, affordable and professional. The team has years of experience and will have your property looking brand new in no time!
          </p>
        </div>

        <div id="contact" className="section">
          <h2><u>Contact</u></h2>
          <p>If you would like more information, <br /> please contact Marshall Bohlander:</p>
          <p>Phone: (513) 312-7322</p>
          <Form />
        </div>
      </div>
    )
  }
}

export default Info
