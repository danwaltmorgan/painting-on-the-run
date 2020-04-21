import React from 'react'
import '../style.css'
import '../media.css'
// import logo from './images/logo2.png'
import Info from './Info'
import SlideImage from './SlideImage'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="flex-container">
          <img
            id="logo"
            className="headerEl"
            src="https://lh3.googleusercontent.com/arxPqwJl5cbW-DhX9ydFhqIKsh1vftnrWY6PrIgKMRZAtACuKmuODJL5MbnnYQ1CZGoKtG7mSW7mG3hKY-StU_-q_1Zvgc56ydDQYvRVK8Q0YTBn-v0WsCyt8A2olZ8SwKo4E6GfEg=s200-p-k"
            alt="Logo; paintbrush crossing a hammer"
            >
            </img>
            <h1
              className="headerEl"
              >Just A-Paintin' & Renovations
            </h1>
        </div>
        <div>
          <p className="contact-info">(513) 312-7322</p>
        </div>
      </header>
    )
  }
}



class Footer extends React.Component {
  render() {
    return(
      <footer>
        <h4>CopyRight <u>Painting How You Want It</u> @ 2020</h4>
      </footer>
    )
  }
}




export default App
