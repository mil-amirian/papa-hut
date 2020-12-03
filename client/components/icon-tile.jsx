import React from 'react';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='tile-container'>
        <img className='tile-image' src="./images/beef-select.png" alt="placeholder" />
        <div className='title-container'>
          <h4 className='title-details'>Title goes here</h4>
          <p className='slices-blurb'>details goes here</p>
          <p className='calories-blurb'>info goes here</p>
        </div>
      </div>
    );
  }
}
