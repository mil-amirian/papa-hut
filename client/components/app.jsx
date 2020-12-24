import React from 'react';
import Base from './base';
import Meats from './meats';
import Veggies from './veggies';
import Header from './header';
import FooterTotal from './totalFooter';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'base'
      },
      price: {
        small: { price: 799, slices: 6, calPerSlice: 180 },
        medium: { price: 999, slices: 8, calPerSlice: 190 },
        large: { price: 1299, slices: 8, calPerSlice: 270 },
        'extra-large': { price: 1499, slices: 10, calPerSlice: 280 },
        regular: 0,
        'thin-italian': 150,
        'deep-pan': 250
      },
      size: null,
      crust: 'regular',
      meats: [],
      veggies: [],
      totalPrice: 0.00
    };
    this.setView = this.setView.bind(this);
    this.renderPizza = this.renderPizza.bind(this);
    this.pizzaBase = this.pizzaBase.bind(this);
    this.pizzaCrust = this.pizzaCrust.bind(this);
    this.pizzaMeats = this.pizzaMeats.bind(this);
    this.pizzaVeggies = this.pizzaVeggies.bind(this);
    this.passMeats = this.passMeats.bind(this);
    this.passVeggies = this.passVeggies.bind(this);
    this.basePrice = this.basePrice.bind(this);
    this.calculatePizzaPrice = this.calculatePizzaPrice.bind(this);
    this.baseSize = this.baseSize.bind(this);
    this.baseCrust = this.baseCrust.bind(this);
  }

  basePrice() {
    return this.state.price;
  }

  baseSize() {
    if (this.state.size) {
      return this.state.size;
    }
  }

  baseCrust() {
    if (this.state.crust) {
      return this.state.crust;
    }
  }

  setView(view, params) {
    this.setState(
      {
        view: {
          name: view
        }
      }
    );
  }

  calculatePizzaPrice() {
    if (this.state.size) {
      let totalPrice = 0;
      const size = this.state.size;
      const crust = this.state.crust;
      const sizePrice = this.state.price[size].price;
      const crustPrice = this.state.price[crust];
      totalPrice += (sizePrice + crustPrice);
      for (let i = 0; i < this.state.meats.length; i++) {
        totalPrice += this.state.meats[i].price;
      }

      for (let i = 0; i < this.state.veggies.length; i++) {
        totalPrice += this.state.veggies[i].price;
      }
      return totalPrice;
    }
  }

  renderPizza() {
    if (this.state.meats || this.state.veggies) {
      return (
        <div className="pizza-viewer">
          <div className="image-container overlap">
            <img src="images/pizza-base.png" className="parent-img-responsive" />
            {
              this.state.meats.map(meat => {
                const imageName = meat.image;
                return (
                  <img key={meat.toppingId} src = { imageName } className = "img-responsive" />
                );
              })
            }
            {
              this.state.veggies.map(veggie => {
                const imageName = veggie.image;
                return (
                  <img key={veggie.toppingId} src = { imageName } className = "img-responsive" />
                );
              })
            }
          </div>
        </div>
      );
    } else {
      return (
        <div className="pizza-viewer">
          <div className="image-container overlap">
            <img src="images/pizza-base.png" className="parent-img-responsive" />
          </div>
        </div>
      );
    }
  }

  pizzaBase(size) {
    this.setState(
      {
        size: size
      });
  }

  pizzaCrust(crust) {
    this.setState(
      {
        crust: crust
      });
  }

  pizzaMeats(meats, action) {
    if (action === 'add') {
      const added = this.state.meats.concat(meats);
      this.setState({
        meats: added
      });
    } else if (action === 'remove') {
      const removed = this.state.meats.filter(remove => remove.name !== meats.name);
      this.setState({
        meats: removed
      });
    }
  }

  pizzaVeggies(veggie, action) {
    if (action === 'add') {
      const added = this.state.veggies.concat(veggie);
      this.setState({
        veggies: added
      });
    } else if (action === 'remove') {
      const removed = this.state.veggies.filter(remove => remove.name !== veggie.name);
      this.setState({
        veggies: removed
      });
    }
  }

  passMeats() {
    if (this.state.meats.length > 0) {
      return this.state.meats;
    }
  }

  passVeggies() {
    if (this.state.veggies.length > 0) {
      return this.state.veggies;
    }
  }

  render() {
    if (this.state.view.name === 'base') {
      return (
        <>
          <Header calculatePizzaPrice={ this.calculatePizzaPrice}/>
          <Base setView={this.setView} renderPizza={this.renderPizza} pizzaBase={this.pizzaBase} pizzaCrust={this.pizzaCrust} basePrice={this.basePrice} baseSize={this.baseSize} baseCrust={this.baseCrust}/>
          <FooterTotal calculatePizzaPrice={ this.calculatePizzaPrice} />
        </>
      );
    } else if (this.state.view.name === 'meats') {
      return (
        <>
          <Header calculatePizzaPrice={ this.calculatePizzaPrice}/>
          <Meats setView={this.setView} renderPizza={this.renderPizza} pizzaMeats={this.pizzaMeats} passMeats={this.passMeats} />
          <FooterTotal calculatePizzaPrice={ this.calculatePizzaPrice} />
        </>
      );
    } else if (this.state.view.name === 'veggies') {
      return (
        <>
          <Header calculatePizzaPrice={ this.calculatePizzaPrice}/>
          <Veggies renderPizza={this.renderPizza} setView={this.setView} pizzaVeggies={this.pizzaVeggies} passVeggies={this.passVeggies}/>
          <FooterTotal calculatePizzaPrice={ this.calculatePizzaPrice} />
        </>
      );
    }

  }
}
