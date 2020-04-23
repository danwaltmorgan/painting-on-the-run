import React from 'react'
import '../style.css'
import '../media.css'
import Info from './Info'
import SlideImage from './SlideImage'

import logo from './images/logo2.png'

const title = "Black Squirrel Carpentry & Painting"

class App extends React.Component {
  render() {
    return (
      <div id="page-container">
        <Header />
        <SlideImage />
        <Info title={title}/>
        <Footer />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="flex-container">
          <img
            id="logo"
            className="headerEl"
            src={logo}
            alt="Logo; paintbrush crossing a hammer"
            >
            </img>
            <h1
              className="headerEl"
              >{title}
            </h1>
        </div>
        <div className="flex-container">
          <a
            href="#contact"
            id="contact-anchor"
            className="contact-info">Contact</a>
          <div className="secondary-cont">
            <a
              href="tel:5137391621"
              className="contact-info">Call</a>
            <a
              href="mailto:mb0694@yahoo.com"
              className="contact-info">Email</a>
          </div>
        </div>
      </header>
    )
  }
}



class Footer extends React.Component {
  render() {
    return(
      <footer>
        <h4>CopyRight <u>{title}</u> @ 2020</h4>
      </footer>
    )
  }
}




export default App
