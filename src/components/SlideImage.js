import React from 'react'

import pics from './images/imgObj'

// import Slider from 'react-animated-slider'
// import 'react-animated-slider/build/horizontal.css'

import ScrollMenu from 'react-horizontal-scrolling-menu';

// const list = pics

// One item component
// selected prop will be passed
// const MenuItem = ({source, selected}) => {
//   return <img
//     src={source}
//     className={`menu-item ${selected ? 'active' : ''}`}
//     ></img>;
// };

// All items component
// Important! add unique key
export const Menu = () =>
  pics.map(pic => {
    // const {pics} = el;

    return <img src={pic.pic} key={pics} alt={pic.alt} />;
  });


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';

class SlideImage extends React.Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu();
  }

  state = {
    selected
  };

  onSelect = key => {
    this.setState({ selected: key });
  }


  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}


export default SlideImage
