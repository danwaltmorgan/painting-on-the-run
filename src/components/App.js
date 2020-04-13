import React from 'react'
import '../style.css'
import logo from './images/logo.png'
import house from './images/white_house.png'
import Info from './Info'

class App extends React.Component {
  render() {
    return (
      <div>
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
          >
        </img>
        <h1
          className="headerEl"
          >Painting on the Run
        </h1>
      </header>
    )
  }
}

class SlideImage extends React.Component {
  // componentDidMount() {
  //   let num = 0;
  //   let style = document.querySelector('#test').style
  //   window.setInterval(() => {
  //     num = (num + 1) % 4
  //     style.marginLeft = `${-600 * num}px`
  //   }, 3000)
  // }

  render() {
    return (
      <div className="img-div">
        <img
          src={house}
          className="slideImage"
          id="test"
          ></img>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <h3>CopyRight <u>Painting on the Run</u> @ 2020</h3>
      </footer>
    )
  }
}




export default App
