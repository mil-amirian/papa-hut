import React from 'react';
import Tile from './icon-tile';

export default class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.pizza = this.pizza.bind(this);
    this.price = this.price.bind(this);
  }

  pizza() {
    return (
      this.props.renderPizza()
    );
  }

  price() {
    const pricing = this.props.basePrice();
    return pricing;

  }

  render() {
    const price = this.price();
    return (
      <div className="outer">
        <div className="app">
          {this.pizza()}
          <div className="toppings-section">
            <div className="buttons">
              <div onClick={() => this.props.setView('base', null)} className="base shadows">
                <i className="fas fa-pizza-slice fa-lg mr-2"></i>
                <h3>Base</h3>
              </div>
              <div onClick={() => this.props.setView('meats', null)} className="meats">
                <i className="fas fa-bacon fa-lg mr-2"></i>
                <h3>Meats</h3>
              </div>
              <div className="veggies" onClick={() => this.props.setView('veggies', null)}>
                <i className="fas fa-leaf fa-lg mr-2"></i>
                <h3>Veggies</h3>
              </div>
              {/* <div className="option">
                <i className="fas fa-fire-alt fa-lg mr-2"></i>
                <h3>Options</h3>
              </div> */}
            </div>
            <div className="options">
              <div className="base-opt">
                <form action="submit">
                  <div className="size pt-4">
                    <div className="sizing m-2">
                      <h2 className="form-headers pl-4">1. Choose Your Size</h2>
                      <div className="choices ml-4">
                        <Tile/>
                        <div className="form-check topping-items">
                          <input className="form-check-input" type="radio" name="size" id="small" value="small" onChange={() => { this.props.pizzaBase(event.target.value); }} />
                          <label className="form-check-label" htmlFor="small">
                            <span>Small</span> (6 slices)
                          </label>
                          <p className="price-black">from ${ (price.small.price / 100).toFixed(2) }</p>
                        </div>
                        <div className="form-check topping-items">
                          <input className="form-check-input" type="radio" name="size" id="medium" value="medium" onChange={() => { this.props.pizzaBase(event.target.value); }} />
                          <label className="form-check-label" htmlFor="medium">
                            <span>Medium</span> (8 slices)
                          </label>
                          <p className="price-black">from ${ (price.medium.price / 100).toFixed(2) }</p>
                        </div>
                        <div className="form-check topping-items">
                          <input className="form-check-input" type="radio" name="size" id="large" value="large" onChange={() => { this.props.pizzaBase(event.target.value); }}/>
                          <label className="form-check-label" htmlFor="large">
                            <span>Large</span> (8 slices)
                          </label>
                          <p className="price-black">from ${ (price.large.price / 100).toFixed(2) }</p>
                        </div>
                        <div className="form-check topping-items">
                          <input className="form-check-input" type="radio" name="size" id="extra-large" value="extra-large" onChange={() => { this.props.pizzaBase(event.target.value); }} />
                          <label className="form-check-label" htmlFor="extra-large">
                            <span>Extra-Large</span> (10 slices)
                          </label>
                          <p className="price-black">from ${ (price['extra-large'].price / 100).toFixed(2) }</p>
                        </div>
                      </div>
                    </div>
                    <div className="crust m-2">
                      <h2 className="form-headers pl-4">2. Choose Your Crust</h2>
                      <div className="choices ml-4">
                        <div className="form-check topping-items">
                          <input className="form-check-input" type="radio" name="crust" id="exampleRadios2" value="regular" onChange={() => { this.props.pizzaCrust(event.target.value); }} />
                          <label className="form-check-label" htmlFor="regular">
                            <span>Regular</span>
                          </label>
                          <p className="price-black">${ (price.regular / 100).toFixed(2) }</p>
                        </div>
                        <div className="form-check topping-items">
                          <input className="form-check-input" type="radio" name="crust" id="exampleRadios3" value="thin-italian" onChange={() => { this.props.pizzaCrust(event.target.value); }} />
                          <label className="form-check-label" htmlFor="thin">
                            <span>Thin Italian</span>
                          </label>
                          <p className="price-black">+${ (price['thin-italian'] / 100).toFixed(2) }</p>
                        </div>
                        <div className="form-check topping-items">
                          <input className="form-check-input" type="radio" name="crust" id="exampleRadios3" value="deep-pan" onChange={() => { this.props.pizzaCrust(event.target.value); }}/>
                          <label className="form-check-label" htmlFor="deep">
                            <span>Deep Pan</span>
                          </label>
                          <p className="price-black">+${ (price['deep-pan'] / 100).toFixed(2) }</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
