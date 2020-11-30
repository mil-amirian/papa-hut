import React from 'react';

export default class FooterTotal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.showPrice = this.showPrice.bind(this);
  }

  showPrice() {
    const price = this.props.calculatePizzaPrice();
    if (price > 0) {
      return (
        <span className="top-price">
            ${(price / 100).toFixed(2)}
        </span>
      );
    } else {
      return (
        <span className="top-price">
            $0.00
        </span>
      );
    }
  }

  render() {
    return (
      <div className="footer-container mt-4">
        <h1 className='footer-title ml-4'>Your Total</h1>
        <div className="subtotal-container">
          <span className="icon">
            <i className="fas fa-fire-alt"></i>
          </span>
        </div>
        <div className="subtotal-container">
          <span className="icon">
            <i className="fas fa-shopping-cart"></i>
          </span>
          <this.showPrice/>
        </div>
      </div>
    );
  }
}
