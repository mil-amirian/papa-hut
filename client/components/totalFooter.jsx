import React from 'react';

export default class FooterTotal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.showPrice = this.showPrice.bind(this);
    this.showCals = this.showCals.bind(this);

  }

  showPrice() {
    const price = this.props.calculatePizzaPrice();
    if (price > 0) {
      return (
        <span className="bottom-price">
            ${(price / 100).toFixed(2)}
        </span>
      );
    } else {
      return (
        <span className="bottom-price">
            $0.00
        </span>
      );
    }
  }

  showCals() {

    const cals = this.props.calculatePizzaCals();
    if (cals > 0) {
      return (
        <span className="bottom-price">
          {cals} total calories
        </span>
      );
    } else {
      return (
        <span className="bottom-price">
            0
        </span>
      );
    }
  }

  render() {
    return (
      <footer className="footer-container">
        <h1 className='footer-title ml-4'>Your Total</h1>
        <div className='footer-info-container'>
          <div className="bottom-subtotal-container">
            <span className="bottom-icon">
              <i className="fas fa-fire-alt"></i>
            </span>
            <this.showCals/>
          </div>
          <div className="bottom-subtotal-container">
            <span className="bottom-icon">
              <i className="fas fa-shopping-cart"></i>
            </span>
            <this.showPrice/>
          </div>
        </div>

      </footer>
    );
  }
}
