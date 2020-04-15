import React from 'react'
import '../style.css'
import '../media.css'
import logo from './images/logo.png'
import Info from './Info'
import SlideImage from './SlideImage'

class App extends React.Component {
  render() {
    return (
      <div id="page-container">
        <Header />
        <SlideImage />
        <Info />
        <Footer />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <img
          id="logo"
          className="headerEl"
          src={logo}
          alt="Logo; paintbrush painting the words 'Painting on the Run' onto a house"
          >
        </img>
        <h1
          className="headerEl"
          >Painting How You Want It
        </h1>
      </header>
    )
  }
}



class Footer extends React.Component {
  render() {
    return(
      <footer>
        <h4>CopyRight <u>Painting on the Run</u> @ 2020</h4>
      </footer>
    )
  }
}




export default App
