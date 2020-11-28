import React from 'react';
import Base from './base';
import Meats from './meats';
import Veggies from './veggies';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'base'
      },
      price: {
        small: 799,
        medium: 999,
        large: 1299,
        'extra-large': 1499
      },
      size: null,
      crust: null,
      meats: [],
      veggies: []
    };
    this.setView = this.setView.bind(this);
    this.renderPizza = this.renderPizza.bind(this);
    this.pizzaBase = this.pizzaBase.bind(this);
    this.pizzaCrust = this.pizzaCrust.bind(this);
    this.pizzaMeats = this.pizzaMeats.bind(this);
    this.passMeats = this.passMeats.bind(this);
  }

  componentDidMount() {

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

  passMeats() {
    if (this.state.meats.length > 0) {
      return this.state.meats;
    }
  }

  render() {
    if (this.state.view.name === 'base') {
      return (
        <Base setView={this.setView} renderPizza={this.renderPizza} pizzaBase={this.pizzaBase} pizzaCrust={ this.pizzaCrust}/>
      );
    } else if (this.state.view.name === 'meats') {
      return (
        <Meats setView={this.setView} renderPizza={this.renderPizza} pizzaMeats={this.pizzaMeats} passMeats={ this.passMeats }/>
      );
    } else if (this.state.view.name === 'veggies') {
      return (
        <Veggies setView={this.setView}/>
      );
    }

  }
}
